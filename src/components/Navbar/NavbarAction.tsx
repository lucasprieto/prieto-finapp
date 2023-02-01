import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';

export interface NavbarActionProps extends LinkProps {
    children: React.ReactNode;
}

export const NavbarItem = styled.li(({ theme }) => ({
    marginLeft: 20,
    border: `1px solid ${theme.primary}`,
    borderRadius: '4px',
}));

const NavbarLink = styled.a(({ theme }) => ({
    textDecoration: 'none',
    color: theme.primary,
    display: 'block',
    padding: '8px 15px',
}));

const NavbarAction: React.FC<NavbarActionProps> = ({ children, ...props }) => {
    return (
        <NavbarItem>
            <Link {...props} legacyBehavior passHref>
                <NavbarLink>{children}</NavbarLink>
            </Link>
        </NavbarItem>
    );
};

export default NavbarAction;
