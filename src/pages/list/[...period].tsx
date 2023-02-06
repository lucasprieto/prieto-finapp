import { Layout } from '@/components/Layout';
import { MonthTabs } from '@/components/MonthTabs';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface ListPeriodProps {
    month: number;
    year: number;
}

export default function ListPeriod({ year, month }: ListPeriodProps) {
    return (
        <>
            <Head>
                <title>Finanzas | Lista</title>
            </Head>
            <Layout>
                <MonthTabs path="/list" year={year} month={month}>
                    asd
                </MonthTabs>
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
