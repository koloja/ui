#!/usr/bin/env node
import {Command} from 'commander';
import pkg from '../package.json';
import logger from './lib/logger';
import init from './commands/init';
import add from './commands/add';
const program = new Command();

program.version(pkg.version).description(pkg.description);
program.command('init').action(() => init());
program.command('add [component]').description('Add a new component').action(async (component: string) => add(component));
program.parse(process.argv);