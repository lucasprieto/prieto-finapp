import { useRouter } from 'next/router';

export default function List() {
    const router = useRouter();
    const today = new Date();
    router.replace(`/list/${today.getFullYear()}/${today.getMonth() + 1}`);
}
