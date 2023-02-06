import { GetServerSidePropsContext } from 'next';

export default function List() {}

export function getServerSideProps(context: GetServerSidePropsContext) {
    const today = new Date();
    return {
        redirect: {
            permanent: false,
            destination: `/list/${today.getFullYear()}/${today.getMonth() + 1}`,
        },
    };
}
