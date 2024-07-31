import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
    const { push, query } = useRouter();

    const loginHandler = () => {
        push("/product");
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={loginHandler}>Login</button>
            <Link href="/auth/register">Register</Link>
        </div>
    );
}

export default LoginPage;