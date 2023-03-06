import { useState } from 'react';
import router from 'next/router';
import { Button } from '../../components/Button';
import Logo from '../../assets/images/header-logo.svg';

import styles from './styles.module.scss';

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const navigate = (to: string) => {
    router.push(to);
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  };

  const openMenu = () => {
    if (isOpened) {
      setIsOpened(false);
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
      return;
    }
    setIsOpened(true);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  };

  return (
    <div className={styles.header}>
      <div
        className={`${styles.hamburger} ${isOpened ? styles.opened : ''}`}
        onClick={openMenu}
      />
      <ul className={styles.desktop}>
        <li
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={Logo.src} alt='Logo' />
        </li>
        <li
          onClick={() => {
            navigate('/products');
          }}
        >
          Products
        </li>
        <span className={styles.dot} />
        <li
          onClick={() => {
            navigate('/');
          }}
        >
          Pricing
        </li>
        <span className={styles.dot} />
        <li
          onClick={() => {
            navigate('/');
          }}
        >
          Features
        </li>
      </ul>
      <div className={styles.buttons}>
        <button className={styles.signIn}>sign in</button>
        <Button text='get started' width={{ desktop: 156, mobile: 95 }} />
      </div>
      {isOpened && (
        <ul className={styles.mobile}>
          <li
            onClick={() => {
              navigate('/products');
            }}
          >
            Products
          </li>
          <span className={styles.dot} />
          <li
            onClick={() => {
              navigate('/');
            }}
          >
            Pricing
          </li>
          <span className={styles.dot} />
          <li
            onClick={() => {
              navigate('/');
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={Logo.src} alt='Logo' />
          </li>
        </ul>
      )}
    </div>
  );
}
