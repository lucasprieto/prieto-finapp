import styled from '@emotion/styled';
import { Bitter } from '@next/font/google';

import { Container } from '../Container';

const bitter = Bitter({ weight: '700', subsets: ['latin'] });

export interface NavbarProps {
    children?: React.ReactNode;
    title: string;
}

const NavbarWrapper = styled.header(({ theme }) => ({
    padding: '10px',
    borderBottom: '1px solid gray',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
}));

const NavbarTitle = styled.span({
    ...bitter,
    fontSize: 28,
    marginRight: 'auto',
    lineHeight: 1.5,
    fontWeight: '700',
});

const ActionsList = styled.ul({
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
});

const Navbar: React.FC<NavbarProps> = ({ title, children }: NavbarProps) => {
    return (
        <Container>
            <NavbarWrapper>
                <NavbarTitle>{title}</NavbarTitle>
                {children && <ActionsList>{children}</ActionsList>}
            </NavbarWrapper>
        </Container>
    );
};

export default Navbar;
