import styled from '@emotion/styled';
import Link from 'next/link';

const HIDE = ['active'];
const TabsButtonAnchor = styled('a', {
    shouldForwardProp: (prop) => !HIDE.includes(prop),
})<{ active: boolean }>(({ theme, active }) => ({
    textDecoration: 'none',
    color: '#000',
    backgroundColor: active ? theme.secondary.main : theme.secondary.accent,
    borderRight: `5px solid ${
        active ? theme.secondary.main : theme.secondary.accent
    }`,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    ':hover': {
        borderRight: `5px solid ${theme.secondary.main}`,
    },
}));

export interface TabButtonProps {
    children: React.ReactNode;
    href: string;
    active: boolean;
}

const TabsButton: React.FC<TabButtonProps> = ({ children, href, active }) => {
    return (
        <Link href={href} legacyBehavior passHref>
            <TabsButtonAnchor active={active}>{children}</TabsButtonAnchor>
        </Link>
    );
};

export default TabsButton;
