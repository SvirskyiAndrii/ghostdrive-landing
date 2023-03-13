import React, { useState } from 'react';
import router from 'next/router';
import { Button } from '../../components/Button';
import Logo from '../../public/images/header-logo.svg';

import styles from './styles.module.scss';

const items = [
  { path: '/', element: <img src={Logo.src} alt='Logo' /> },
  { path: '/products', element: 'Products' },
  { path: '/pricing', element: 'Pricing' },
  { path: '/features', element: 'Features' },
];

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [active, setActive] = useState<number>(0);

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
        {items.map(({ path, element }, index) => {
          return (
            <li
              key={`li-${index}`}
              className={`${
                index !== 0 && index !== items.length - 1 ? styles.dot : ''
              } ${active === index ? styles.active : ''}`}
              onClick={() => {
                navigate(path);
                setActive(index);
              }}
            >
              {element}
            </li>
          );
        })}
      </ul>
      <div className={styles.buttons}>
        <button
          className={styles.signIn}
          onClick={() => {
            window.open('https://app.ghostdrive.io/sign-in');
          }}
        >
          sign in
        </button>
        <Button
          text='get started'
          width={{ desktop: 156, mobile: 95 }}
          onClick={() => {
            window.open('https://ghostdrive.io/nft');
          }}
        />
      </div>
      {isOpened && (
        <ul className={styles.mobile}>
          {items.map(({ path, element }, index) => {
            return (
              <li
                key={`li-mobile-${index}`}
                className={`${active === index ? styles.active : ''}`}
                onClick={() => {
                  navigate(path);
                  setActive(index);
                  setIsOpened(false);
                }}
              >
                {element}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
