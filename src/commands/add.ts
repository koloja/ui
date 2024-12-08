import logger from '../lib/logger';
import path from 'node:path';
import fs from 'node:fs/promises';
import configPath, {ConfigSchema} from '../lib/configPath';
import getComponents from '../lib/components';

const exists = async (file: string): Promise<boolean> => {try {await fs.access(file); return true} catch {return false}};
const componentsLink = 'https://raw.githubusercontent.com/koloja/ui/refs/heads/main/site/src/components/';

const add = async (component: string | undefined) => {
    const components = await getComponents();
    if (!component) return logger.error('Please define a component');
    else if (!components[component]) return logger.error('Invalid component');
    
    try {
        // will throw error if false
        // all errors like this are caught
        await fs.access(configPath);
        const rawConfig = await fs.readFile(configPath, 'utf-8');
        const rawTSConfig = await fs.readFile('tsconfig.json', 'utf-8');
        const config: ConfigSchema = JSON.parse(rawConfig);
        const tsconfig = JSON.parse(rawTSConfig);

        if (!tsconfig?.compilerOptions?.paths[config?.path][0]) throw new Error('No path could be found inside the Typescript config!');

        const filteredPath = config.path.replace('/*', '');
        const realPath = path.join(tsconfig?.compilerOptions?.paths[config?.path][0].replace('*', ''));

        const componentsPath = path.join(realPath, config.aliases.components.split(filteredPath)[1]) + '\\';
        const globalsPath = path.join(realPath, config.aliases.globals.split(filteredPath)[1]);

        const componentsExists = await exists(componentsPath + components[component]);
        const globalsExists = await exists(globalsPath + '.tsx');
        if (componentsExists) throw new Error('Component already exists.');

        //// console.log('globals:', globalsPath);
        //// console.log('real:', realPath);
        //// console.log('components:', componentsPath);

        if (!globalsExists) throw new Error('No global styles could be found.');
        const response = await fetch(componentsLink + components[component]);
        const data = await response.text();

        // TODO: Redo this whole part (and the whole file)
        const filteredData = data
        .replace('@/app/globals', config.aliases.globals.replace(/\\+/g, '/'))
        .replace('@/lib', config.aliases.lib.replace(/\\+/g, '/'));

        await fs.mkdir(componentsPath, {recursive: true});
        await fs.writeFile(componentsPath + components[component], filteredData, 'utf-8');
        logger.event(`Finished creating component '${component}'`);
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes(configPath)) return logger.error(`No config file could be found, run \'npx asul@latest init\'`);
            else return logger.error(`Could not create component: ${error.message}`);
        } else return logger.error('Something went wrong!');
    };
};

export default add;