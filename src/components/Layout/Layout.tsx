import { Navbar, NavbarAction, NavbarActionProps } from '@/components/Navbar';
import { Container } from '@/components/Container';
import { useRouter } from 'next/router';

export interface LayoutProps {
    children: React.ReactNode;
}

const NavbarActionWithActive: React.FC<Omit<NavbarActionProps, 'active'>> = ({
    href,
    children,
}) => {
    const { pathname } = useRouter();
    return (
        <NavbarAction href={href} active={pathname.includes(href.toString())}>
            {children}
        </NavbarAction>
    );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pathname } = useRouter();
    return (
        <>
            <Navbar title="Finanzas">
                <NavbarAction href="/" active={pathname === '/'}>
                    Home
                </NavbarAction>
                <NavbarActionWithActive href="/list">
                    Lista
                </NavbarActionWithActive>
                <NavbarActionWithActive href="/dashboard">
                    Graficos
                </NavbarActionWithActive>
            </Navbar>
            <Container>
                <main>{children}</main>
            </Container>
        </>
    );
};

export default Layout;
