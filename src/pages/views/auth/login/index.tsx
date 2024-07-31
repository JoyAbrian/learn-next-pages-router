import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

const LoginView = () => {
    const { push, query } = useRouter();

    const handleLogin = () => {
        push("/product");
    }

    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold">Login Page</h1>
            <button onClick={ () => handleLogin() }>Login</button>
            <Link href="/auth/register"><p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>Register</p></Link>
        </div>
    );
}

export default LoginView;