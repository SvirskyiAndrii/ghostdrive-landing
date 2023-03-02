import styles from './styles.module.scss';
import router from 'next/router';
import Logo from '../../assets/images/header-logo.svg';
import { Button } from '../../components/Button';

export default function Header() {
    return (
        <div className={styles.header}>
            <ul>
                <li onClick={() => router.push('/')}>
                    <img src={Logo.src} alt="Logo" />
                </li>
                <li onClick={() => router.push('/products')}>Products</li>
                <span className={styles.dot} />
                <li onClick={() => router.push('/')}>Pricing</li>
                <span className={styles.dot} />
                <li onClick={() => router.push('/')}>Features</li>
            </ul>
            <div className={styles.buttons}>
                <button className={styles.signIn}>sign in</button>
                <Button text="get started" />
            </div>
        </div>
    );
}
