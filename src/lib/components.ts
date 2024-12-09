// All actual component files can be found inside of 'site/src/components'.
// Component bindings are in 'components.json'.

type Components = {[key: string]: string};
const getComponents = async (): Promise<Components> => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/koloja/asul/refs/heads/main/components.json');
        const data = await response.text();
        const json: Components = JSON.parse(data);
        return json;
    } catch (error) {throw error};
};

export default getComponents;