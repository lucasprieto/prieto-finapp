import styled from '@emotion/styled';
import Spinner from './Spinner';

const SpinnerWrapper = styled.div({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const BlockSpinner = () => {
    return (
        <SpinnerWrapper>
            <Spinner />
        </SpinnerWrapper>
    );
};

export default BlockSpinner;
