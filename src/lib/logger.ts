import chalk from 'chalk';

const prefixes = {
    wait: chalk.white.bold('○'),
    error: chalk.red.bold('⨯'),
    warn: chalk.yellow.bold('⚠'),
    ready: '▲',
    info: chalk.white.bold(' '),
    event: chalk.green.bold('✓'),
    trace: chalk.magenta.bold('»')
};

const warnOnceMessages = new Set<string>();
const logger = {
    bootstrap: (...message: string[]) => console.log('  ' + message.join(' ')),
    wait: (...message: string[]) => console.log(prefixes.wait, ...message),
    error: (...message: string[]) => console.log(prefixes.error, ...message),
    warn: (...message: string[]) => console.log(prefixes.warn, ...message),
    ready: (...message: string[]) => console.log(prefixes.ready, ...message),
    info: (...message: string[]) => console.log(prefixes.info, ...message),
    event: (...message: string[]) => console.log(prefixes.event, ...message),
    trace: (...message: string[]) => console.log(prefixes.trace, ...message),
    waitOnce: (...message: string[]) => {if (!warnOnceMessages.has(message[0])) {
        warnOnceMessages.add(message.join(' '));
        console.log(prefixes.wait, ...message);
    }}
};

export default logger;
export {logger, prefixes};