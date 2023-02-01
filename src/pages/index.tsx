import Head from 'next/head';
import { Navbar, NavbarAction } from '@/components/Navbar';

export default function Home() {
    return (
        <>
            <Head>
                <title>Finanzas</title>
                <meta
                    name="description"
                    content="Aplicacion de finanzas de la familia Prieto"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar title="Finanzas">
                    <NavbarAction href="/listado">Lista</NavbarAction>
                    <NavbarAction href="/dashboard">Graficos</NavbarAction>
                </Navbar>
            </main>
        </>
    );
}
