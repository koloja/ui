import logger from '../lib/logger';
import fs from 'node:fs/promises';
import path from 'node:path';
import inquirer from 'inquirer';

const add = async (component: string | undefined) => {
    if (!component) return logger.error('Please define a component');
    

    logger.info(component);
};

export default add;