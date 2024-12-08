import logger from '../lib/logger';
import fs from 'node:fs/promises';
import path from 'node:path';
import inquirer from 'inquirer';

const componentsLink = 'https://raw.githubusercontent.com/koloja/ui/refs/heads/main/components/[COMPONENT]'
const components: {[key: string]: string} = {
    container: 'Container.tsx'
};

const add = async (component: string | undefined) => {
    if (!component) return logger.error('Please define a component');
    else if (!components[component]) return logger.error('Invalid component');
    
    try {
        const response = await fetch(componentsLink.replace('[COMPONENT]', components[component]));
        const data = await response.text();
        console.log(data);
    } catch (error) {logger.error(`Something went wrong: ${(error as Error).message}`)};
};

export default add;