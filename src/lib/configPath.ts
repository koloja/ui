interface ConfigSchema {
    $schema: string;
    src: boolean;
    path: string;
    aliases: {
        root: string;
        components: string;
        lib: string;
        globals: string;
    }
};

export {ConfigSchema};
export default './ui.config.json';