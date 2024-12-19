import {defineConfig} from '@pandacss/dev';

export default defineConfig({
    preflight: true,
    include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],
    exclude: [],
    theme: {extend: {}},
    syntax: 'template-literal',
    outdir: 'styled-system',
    jsxFramework: 'react'
});