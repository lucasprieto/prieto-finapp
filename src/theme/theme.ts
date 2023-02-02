export interface ThemeMediaQuery {
    xxl: string;
    xl: string;
    lg: string;
    md: string;
    sm: string;
}

export interface ColorVariation {
    main: string;
    accent: string;
}

export interface Theme {
    primary: ColorVariation;
    secondary: ColorVariation;
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
    primary: {
        main: '#30475E ',
        accent: '#7E8A97 ',
    },
    secondary: {
        main: '#CBAF87 ',
        accent: '#E7DEC8 ',
    },
    mediaquery: {
        xxl: `@media (min-width: ${BREAKPOINTS.xxl}px)`,
        xl: `@media (min-width: ${BREAKPOINTS.xl}px)`,
        lg: `@media (min-width: ${BREAKPOINTS.lg}px)`,
        md: `@media (min-width: ${BREAKPOINTS.md}px)`,
        sm: `@media (min-width: ${BREAKPOINTS.sm}px)`,
    },
};

export default theme;
