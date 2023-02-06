import { Layout } from '@/components/Layout';
import { MonthTabs } from '@/components/MonthTabs';
import { getGastos } from '@/mocks/gastos';
import { Expense } from '@/model';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type ListPeriodQuery = {
    period: string[];
};

interface ListPeriodProps {
    expenses: Expense[];
}

export default function ListPeriod({}: ListPeriodProps) {
    const { query } = useRouter();
    const [year, month] = (query as ListPeriodQuery).period;
    return (
        <>
            <Head>
                <title>Finanzas | Lista</title>
            </Head>
            <Layout>
                <MonthTabs
                    path="/list"
                    year={parseInt(year)}
                    month={parseInt(month)}
                >
                    asd
                </MonthTabs>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const expenseData = await getGastos();
    return { expenses: expenseData.expenses };
}
