#!/usr/bin/env node
// TODO: This whole CLI needs to be redone

import {Command} from 'commander';
import pkg from '../package.json';
import logger from './lib/logger';
import init from './commands/init';
import add from './commands/add';
const program = new Command();

program.version(pkg.version).description(pkg.description);
program.command('init').description('initialize your project (goto https://koloja.dev/ for more info)').action(() => init());
program.command('add [component]').description('add a new component').action(async (component: string) => add(component));
program.parse(process.argv);