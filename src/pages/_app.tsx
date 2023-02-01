import { GlobalStyles, theme } from '@/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
