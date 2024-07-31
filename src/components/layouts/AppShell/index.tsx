import NavBar from "../NavBar";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main>
            <NavBar />
            { children }
        </main>
    );
}

export default AppShell;