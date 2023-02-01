export interface ThemeMediaQuery {
    xxl: string;
    xl: string;
    lg: string;
    md: string;
    sm: string;
}

export interface Theme {
    primary: string;
    secondary: string;
    mediaquery: ThemeMediaQuery;
}

export const BREAKPOINTS = {
    xxl: 1400,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
};

const theme: Theme = {
    primary: '#f72585',
    secondary: '#4cc9f0',
    mediaquery: {
        xxl: `@media (min-width: ${BREAKPOINTS.xxl}px)`,
        xl: `@media (min-width: ${BREAKPOINTS.xl}px)`,
        lg: `@media (min-width: ${BREAKPOINTS.lg}px)`,
        md: `@media (min-width: ${BREAKPOINTS.md}px)`,
        sm: `@media (min-width: ${BREAKPOINTS.sm}px)`,
    },
};

export default theme;
