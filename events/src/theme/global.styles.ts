import { createGlobalStyle } from 'styled-components';
import { font } from './font';

export const GlobalStyles = createGlobalStyle`

    html,
    body,
    fieldset {
        box-sizing: border-box;
        font-family: ${font.sansSerif};
        font-size: ${font.size}px;
        font-weight: ${font.weight};
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    html, body {
        background: #fff;
        color: #0a0a0a;
        height: 100%;
    }

    ul, ol, dl {
        padding: 0;
    }

    p {
        line-height: 1.8rem;
        margin-bottom: 2rem;
    }

    span, strong, em {
        font-family: inherit;
        font-size: inherit;
    }

    strong {
        font-weight: 600;
    }

    a {
        color: inherit;
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }
    
`;
