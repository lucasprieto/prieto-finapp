import { GetServerSidePropsContext } from 'next';

export default function Dashboard() {}

export function getServerSideProps(context: GetServerSidePropsContext) {
    const today = new Date();
    return {
        redirect: {
            permanent: false,
            destination: `/dashboard/${today.getFullYear()}/${
                today.getMonth() + 1
            }`,
        },
    };
}
