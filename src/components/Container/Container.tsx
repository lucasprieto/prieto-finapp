import styled from '@emotion/styled';

const Container = styled.div(({ theme }) => ({
    [`${theme.mediaquery.sm}`]: {
        maxWidth: 540,
    },
    [`${theme.mediaquery.md}`]: {
        maxWidth: 720,
    },
    [`${theme.mediaquery.lg}`]: {
        maxWidth: 960,
    },
    [`${theme.mediaquery.xl}`]: {
        maxWidth: 1140,
    },
    [`${theme.mediaquery.xxl}`]: {
        maxWidth: 1320,
    },
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
}));

export default Container;
