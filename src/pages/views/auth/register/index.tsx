import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { push } = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value
        };
        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (res.status === 200) {
            event.target.reset();
            setIsLoading(false);
            push("/auth/login");
        } else {
            setIsLoading(false);
            setError(res.status === 400 ? "Email already exists" : "An error occurred. Please try again.")
        }
    };

    return (
        <div className="flex-col flex items-center justify-center align-middle ">
            <h1 className="text-4xl font-bold my-8">Register</h1>
            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="flex-col flex w-1/2 border px-5 py-8">
                <label className="text-lg py-2" htmlFor="fullname">Fullname</label>
                <input className="text-md bg-gray-200 placeholder:text-gray-400 py-3 px-2 mb-2" id="fullname" name="fullname" type="text" placeholder="Fullname" />

                <label className="text-lg py-2" htmlFor="email">Email</label>
                <input className="text-md bg-gray-200 placeholder:text-gray-400 py-3 px-2 mb-2" id="email" name="email" type="email" placeholder="Email" />

                <label className="text-lg py-2" htmlFor="password">Password</label>
                <input className="text-md bg-gray-200 placeholder:text-gray-400 py-3 px-2 mb-2" id="password" name="password" type="password" placeholder="Password" />

                <button className="bg-black text-white py-3 mt-4" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Register"}
                </button>
            </form>

            <p>Already have an account? <Link href="/auth/login">Login</Link></p>
        </div>
    );
}

export default RegisterView;