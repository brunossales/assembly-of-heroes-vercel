import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },

    body: {
        minHeight: '100vh',
        background: '$background',
        color: '$text',
        fontFamily: 'Oswald',
    },
});