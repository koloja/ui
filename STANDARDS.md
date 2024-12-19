# Coding Standards
This file outlines the coding standards that should be followed when contributing.<br/>
We have these to keep the project maintainable and because there are no decent prettier alternatives to fit the standard.

## General Guidelines
- Prioritize readability and maintainability over complexity.
- No useless comments.
- Break down large functions or components into smaller, reusable units.
- Do not commit code that your parents would not be proud of, clean up before pushing.
- Stick to `camelCase` for variables, functons and files / folders.
- Components and classes must be kept as `PascalCase`.

## Formatting
- Stick to a compact code layout, for examples see [this](#examples).
- Keep a 4 space indent for all files. (no tabs)
- Clear unused whitespace.
- Keep lines under 120 characters to improve readability.
- Always use semi-colons when needed.
- Use blank lines to separate logical sections of code for readability.
- Do not leave empty lines at the end of files.
- Stick to single quotes.
<br/><br/>

# Examples
- `.tsx` files:

    Invalid:
    ```tsx
    import React from "react"
    import { styled } from "../../styled-system/jsx"

    /*

    This is a styled component called `Span`, which is a wrapper around the HTML `<span>` element.
    The component has the following styles applied:
    - `color: red;` - The text color inside the span will be red.
    - `font-size: 1rem;` - The font size of the text will be 1 rem (relative to the root font size).

    */
    const Span = styled.span`
        color: red;
        font-size: 1rem;
    `

    function Page() {
        return (
            <Span>
                page
            </Span>
        );
    }

    export default Page;

    ```

    Valid:
    ```tsx
    import React from 'react';
    import {styled} from '../../styled-system/jsx';

    const Span = styled.span`
        color: red;
        font-size: 1rem;
    `;

    const Page: React.FC = () => {
        return (<Span>page</Span>);
    };
    export default Page;
    ```
    <br/><br/><br/>
- `.ts` files:

    Invalid:
    ```tsx
    import error_function from "./some_dir/my_code"

    function abdadw(text) {
        const bca = error_function(text)
        return bca
    }

    export default abdadw

    ```

    Valid:
    ```tsx
    import errorFunction from './someDir/myCode';

    const main = async (text: string): Promise<boolean | undefined> => {
        try {
            const data = await errorFunction(text);
            return data;
        } catch (error) {return console.log(error)};
    };

    export default main;
    ```
    <br/>

By following these standards, we ensure that your code is consistent and maintainable. If you have any questions or suggestions about these guidelines, feel free to open an issue or PR.<br/>
**Please note that your code will be rejected if you do not follow this guide.**