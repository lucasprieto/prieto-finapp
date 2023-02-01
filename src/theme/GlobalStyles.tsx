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
                },
            ]}
        />
    );
};

export default GlobalStyles;
