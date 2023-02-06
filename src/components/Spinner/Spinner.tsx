import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.span(({ theme }) => ({
    width: 48,
    height: 48,
    border: `5px solid ${theme.primary.main}`,
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    animation: `${spin} 1s linear infinite`,
}));

export default Spinner;
