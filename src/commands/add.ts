import logger from '../lib/logger';
import fs from 'node:fs/promises';
import configPath, {ConfigSchema} from '../lib/configPath';

const exists = async (file: string): Promise<boolean> => {try {await fs.access(file); return true} catch {return false}};

const componentsLink = 'https://raw.githubusercontent.com/koloja/ui/refs/heads/main/site/src/components/[COMPONENT]'
const components: {[key: string]: string} = {
    container: 'Container.tsx'
};

const add = async (component: string | undefined) => {
    if (!component) return logger.error('Please define a component');
    else if (!components[component]) return logger.error('Invalid component');
    
    try {
        await fs.access(configPath);
        const rawConfig = await fs.readFile(configPath, 'utf-8');
        const rawTSConfig = await fs.readFile('tsconfig.json', 'utf-8');
        const config: ConfigSchema = JSON.parse(rawConfig);
        const tsconfig = JSON.parse(rawTSConfig);
        if (!tsconfig?.compilerOptions?.paths[config?.path][0]) throw new Error('No path could be found inside the Typescript config!');
        const realPath = tsconfig?.compilerOptions?.paths[config?.path][0].replace('*', '');
        const componentsPath = config.aliases.components.replace(config.path.replace('*', ''), realPath) + '/';
        const doesExist = await exists(componentsPath + components[component]);
        if (doesExist) throw new Error('Component already exists.');
        const response = await fetch(componentsLink.replace('[COMPONENT]', components[component]));
        const data = await response.text();
        await fs.mkdir(componentsPath, {recursive: true});
        await fs.writeFile(componentsPath + components[component], data, 'utf-8');
        logger.event(`Finished creating component '${component}'`);
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes(configPath)) return logger.error(`No config file could be found, run \'npx koloja@latest init\'`);
            else return logger.error(`Could not create component: ${error.message}`);
        } else return logger.error('Something went wrong!');
    };
};

export default add;