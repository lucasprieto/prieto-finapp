import { Global } from '@emotion/react';
import { Bitter } from '@next/font/google';

const inter = Bitter({ weight: ['400'], subsets: ['latin'] });

const GlobalStyles = (): JSX.Element => {
    return (
        <Global
            styles={(theme) => [
                {
                    '*': {
                        ...inter.style,
                        boxSizing: 'border-box',
                        fontStyle: 'normal',
                        fontWeight: '400',
                    },
                    'html,body': {
                        padding: 0,
                        margin: 0,
                    },
                    '::-webkit-scrollbar': {
                        width: 6,
                        background: 'transparent',
                    },
                    '::-webkit-scrollbar-track': {
                        boxShadow: `inset 0 0 5px rgba(0,0,0,0.5)`,
                    },
                    '::-webkit-scrollbar-thumb': {
                        width: 6,
                        background: theme.primary.accent,
                        borderRadius: 4,
                    },
                },
            ]}
        />
    );
};

export default GlobalStyles;
