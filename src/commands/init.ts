import logger from '../lib/logger';
import fs from 'node:fs/promises';
import path from 'node:path';
import inquirer from 'inquirer';
import configPath, {ConfigSchema} from '../lib/configPath';

const init = async () => {
    try {
        await fs.access(configPath);
        return logger.error('A config file already exists.');
    } catch (error) {
        const answers = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'src',
                message: 'Use \'src\' directory?',
                default: true
            },
            {
                type: 'input',
                name: 'path',
                message: 'Enter the default path:',
                default: '@/*'
            },
            {
                type: 'input',
                name: 'globals',
                message: 'Enter the globals path:',
                default: 'app/globls.tsx'
            },
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Confirm config?',
                default: true
            }
        ]);
        if (!answers.confirm) return;
        const filteredPath = (answers.path as string).slice(0, -1);
    
        const config: ConfigSchema = {
            $schema: 'https://raw.githubusercontent.com/koloja/ui/refs/heads/main/schema.json',
            src: answers.src,
            path: answers.path,
            aliases: {
                root: `${filteredPath}app`,
                components: `${filteredPath}components`,
                lib: `${filteredPath}lib`,
                globals: `${filteredPath}app/${answers.globals}`
            }
        };
    
        await fs.writeFile(configPath, JSON.stringify(config, null, 4));
    }
};

export default init;