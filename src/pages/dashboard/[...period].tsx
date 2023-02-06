import { Layout } from '@/components/Layout';
import { MonthTabs } from '@/components/MonthTabs';
import { Spinner } from '@/components/Spinner';
import Head from 'next/head';
import { useRouter } from 'next/router';

type DashboardPeriodQuery = {
    period: string[];
};

export default function DashboardPeriod() {
    const { query } = useRouter();
    const [year, month] = (query as DashboardPeriodQuery).period;
    return (
        <>
            <Head>
                <title>Finanzas | Graficos</title>
            </Head>
            <Layout>
                <MonthTabs
                    path="/dashboard"
                    year={parseInt(year)}
                    month={parseInt(month)}
                >
                    <Spinner />
                </MonthTabs>
            </Layout>
        </>
    );
}
