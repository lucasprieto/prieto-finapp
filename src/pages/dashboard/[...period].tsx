import { Layout } from '@/components/Layout';
import { MonthTabs } from '@/components/MonthTabs';
import { Spinner } from '@/components/Spinner';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface DashboardPeriodProps {
    month: number;
    year: number;
}

export default function DashboardPeriod({ month, year }: DashboardPeriodProps) {
    return (
        <>
            <Head>
                <title>Finanzas | Graficos</title>
            </Head>
            <Layout>
                <MonthTabs path="/dashboard" year={year} month={month}>
                    <Spinner />
                </MonthTabs>
            </Layout>
        </>
    );
}

type DashboardPeriodParams = {
    period: string[];
};

export function getServerSideProps(context: GetServerSidePropsContext) {
    const { period } = context.params as DashboardPeriodParams;
    return {
        props: {
            month: parseInt(period[1]),
            year: parseInt(period[0]),
        },
    };
}
