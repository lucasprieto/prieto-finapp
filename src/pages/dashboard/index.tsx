import { useRouter } from 'next/router';

export default function Dashboard() {
    const router = useRouter();
    const today = new Date();
    router.replace(`/dashboard/${today.getFullYear()}/${today.getMonth() + 1}`);
}
