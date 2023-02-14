import styled from '@emotion/styled';

export interface CardProps {
    children: React.ReactNode;
}

const CardWrapper = styled('div')({
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
    boxShadow:
        '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);',
});

const Card: React.FC<CardProps> = ({ children }) => {
    return <CardWrapper>{children}</CardWrapper>;
};

export default Card;