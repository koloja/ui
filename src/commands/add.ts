import logger from '../lib/logger';
import fs from 'node:fs/promises';
import path from 'node:path';
import inquirer from 'inquirer';
import configPath, {ConfigSchema} from '../lib/configPath';

const componentsLink = 'https://raw.githubusercontent.com/koloja/ui/refs/heads/main/components/[COMPONENT]'
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

        const response = await fetch(componentsLink.replace('[COMPONENT]', components[component]));
        const data = await response.text();

        await fs.writeFile(config.aliases.components.replace(config.path.replace('*', '') + components[component], realPath), data, 'utf-8')
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            if (error.message.includes(configPath)) return logger.error(`No config file could be found, run \'npx koloja@latest init\'`);
            else return logger.error(`Could not create component: ${error.message}`);
        } else return logger.error('Something went wrong!');
    };
};

export default add;