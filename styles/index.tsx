import { createStitches } from "@stitches/react";

// Configurações e ferramentas que vamos precisar para construir a estilização com o stitches
export const { 
    config,
    styled,
    globalCss,
    theme,
    createTheme,
    keyframes,
    css,
    getCssText
} = createStitches({
    theme: {
        colors: {
            main: '#c9514f',
            background: 'linear-gradient(to bottom, #000000, #1C0038 100%)',
            backgroundHeader: '#050007',
            white: '#fff',
            text: '#9c42cc',
            buttons: '#c79fdd'
        }
        
    },
    media: {
        bp1: '(max-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    }
});