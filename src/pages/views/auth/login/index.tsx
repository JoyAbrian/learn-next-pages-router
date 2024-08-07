import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    
    const { push, query } = useRouter();

    const callbackUrl: any = query.callbackUrl || "/";
    const handleLogin = () => async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl
            });
            
            if (!res?.error) {
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorrect. Please try again.")
            }
        } catch (error: any) {
            setIsLoading(false);
            setError("Error logging in. Please try again.")
        }
    }

    return (
        <div className="flex-col flex items-center justify-center align-middle ">
            <h1 className="text-4xl font-bold my-8">Login</h1>
            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleLogin} className="flex-col flex w-1/2 border px-5 py-8">

                <label className="text-lg py-2" htmlFor="email">Email</label>
                <input className="text-md bg-gray-200 placeholder:text-gray-400 py-3 px-2 mb-2" id="email" name="email" type="email" placeholder="Email" />

                <label className="text-lg py-2" htmlFor="password">Password</label>
                <input className="text-md bg-gray-200 placeholder:text-gray-400 py-3 px-2 mb-2" id="password" name="password" type="password" placeholder="Password" />

                <button className="bg-black text-white py-3 mt-4" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </form>

            <p>Don't have an account? <Link href="/auth/register">Register</Link></p>
        </div>
    );
}

export default LoginView;