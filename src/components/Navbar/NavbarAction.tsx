import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';

export interface NavbarActionProps extends LinkProps {
    children: React.ReactNode;
    active: boolean;
}

export const NavbarItem = styled.li(({ theme }) => ({
    marginLeft: 20,
    borderRadius: '4px',
}));

interface NavbarLinkProps {
    active: boolean;
}
const HIDE = ['active'];
const NavbarLink = styled('a', {
    shouldForwardProp: (prop) => !HIDE.includes(prop),
})<NavbarLinkProps>(({ theme, active }) => ({
    textDecoration: 'none',
    color: active ? '#FFF' : theme.primary.main,
    display: 'block',
    padding: '8px 15px',
    borderRadius: 5,
    backgroundColor: active ? theme.primary.main : '#FFF',
    transition: 'background-color 0.2s ease-out',
    ':hover': {
        backgroundColor: theme.primary.accent,
        color: '#FFF',
    },
}));

const NavbarAction: React.FC<NavbarActionProps> = ({
    children,
    active,
    ...props
}) => {
    return (
        <NavbarItem>
            <Link {...props} legacyBehavior passHref>
                <NavbarLink active={active}>{children}</NavbarLink>
            </Link>
        </NavbarItem>
    );
};

export default NavbarAction;
