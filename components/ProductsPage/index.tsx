import { Button } from '../Button';

import FirstBlock from '../../assets/images/products-first.png';
import SecondBlock from '../../assets/images/products-second.png';
import ThirdBlock from '../../assets/images/products-third.png';

import styles from './styles.module.scss';

export const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GHOSTDRIVE’S PRODUCTS</h1>
      <div className={styles.ghostPage}>
        <div className={styles.content}>
          <h2 className={styles.firstTitle}>
            GHOST<span>Page</span>
          </h2>
          <h2 className={styles.secondTitle}>Comfortable Editor</h2>
          <p>
            GhostDrive Pages is a powerful document editor app that provides a
            simple and comfortable interface for users to create and edit
            documents on-the-go.
          </p>
          <Button
            text='TRY IT UP'
            width={{
              desktop: 139,
              mobile: 83,
            }}
            onClick={() => {
              window.open('https://ghostdrive.io/nft');
            }}
          />
        </div>
        <img src={FirstBlock.src} alt='Ipad' />
      </div>
      <div className={styles.ghostVault}>
        <img src={SecondBlock.src} alt='Ipad' />
        <div className={styles.content}>
          <h2 className={styles.firstTitle}>
            GHOST<span>VAULT</span>
          </h2>
          <h2 className={styles.secondTitle}>SECURE ENCRYPTED SOLUTIOn</h2>
          <p>
            In one click you can add sensitive information. Your passport,
            credit card,driver license another documents what you need free.
          </p>
        </div>
      </div>
      <div className={styles.playground}>
        <div className={styles.content}>
          <h2 className={styles.firstTitle}>AI pLAYGROUND</h2>
          <p>
            GhostDrive offers advanced editing features such as AI IMAGE
            generation, image-to-image transformation, and powerful upscaling
            capabilities.
          </p>
          <Button
            text='TRY IT UP'
            width={{
              desktop: 139,
              mobile: 83,
            }}
            onClick={() => {
              window.open('https://ghostdrive.io/nft');
            }}
          />
        </div>
        <img src={ThirdBlock.src} alt='Ipad' />
      </div>
    </div>
  );
};
