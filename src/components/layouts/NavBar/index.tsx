import styles from './Navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

const NavBar = () => {
    const { data } : any = useSession();

    return (
        <div className={styles.navbar}>
            <h1 className='big'>NavBar</h1>
            <div className='text-white gap-3 flex'>{data && data.user.fullname}
                {data ? (
                    <button className='bg-white text-black font-bold p-2' onClick={() => signOut()}>Sign Out</button>
                ) : (
                    <button className='bg-white text-black font-bold p-2' onClick={() => signIn()}>Sign In</button>
                )}
            </div>
        </div>
    )
}

export default NavBar;