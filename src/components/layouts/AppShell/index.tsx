import { useRouter } from "next/router";
import NavBar from "../NavBar";

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();

    return (
        <main>
            { !disableNavbar.includes(pathname) && <NavBar /> }
            { children }
        </main>
    );
}

export default AppShell;