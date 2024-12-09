import logger from '../lib/logger';
import fs from 'node:fs/promises';
import path from 'node:path';
import inquirer from 'inquirer';
import configPath, {ConfigSchema} from '../lib/configPath';
import chalk from 'chalk';
const required = ['styled-components', 'lucide-react'];

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
                default: 'app/globals.tsx'
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
                root: path.join(filteredPath, 'app'),
                components: path.join(filteredPath, 'components'),
                lib: path.join(filteredPath, 'lib'),
                globals: path.join(filteredPath, answers.globals)
            }
        };
    
        await fs.writeFile(configPath, JSON.stringify(config, null, 4));
        console.log('');
        logger.event('Finished config setup.');
        logger.event(`Run ${chalk.cyan(`npm i ${required.join(' ')}`)} to get ASUL working.`);
        logger.event(`Visit ${chalk.cyan('https://koloja.dev/')} for more help.`);
    }
};

export default init;