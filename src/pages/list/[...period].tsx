import { getAllExpensesByPeriod } from '@/apis';
import { BalanceTable } from '@/components/BalanceTable';
import { DetailLayout, Layout } from '@/components/Layout';
import { MonthTabs } from '@/components/MonthTabs';
import { BlockSpinner } from '@/components/Spinner';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useQuery } from 'react-query';

interface ListPeriodProps {
    month: number;
    year: number;
}

export default function ListPeriod({ year, month }: ListPeriodProps) {
    const { isLoading, error, data } = useQuery(['expenses', year, month], () =>
        getAllExpensesByPeriod(year, month)
    );
    return (
        <>
            <Head>
                <title>Finanzas | Lista</title>
            </Head>
            <Layout>
                <DetailLayout>
                    <MonthTabs path="/list" year={year} month={month}>
                        {isLoading && <BlockSpinner />}
                        {!isLoading && !error && data && (
                            <BalanceTable items={data} />
                        )}
                    </MonthTabs>
                    <div style={{ background: 'red', height: 300 }}></div>
                </DetailLayout>
            </Layout>
        </>
    );
}

type ListPeriodParams = {
    period: string[];
};

export function getServerSideProps(context: GetServerSidePropsContext) {
    const { period } = context.params as ListPeriodParams;
    return {
        props: {
            month: parseInt(period[1]),
            year: parseInt(period[0]),
        },
    };
}
