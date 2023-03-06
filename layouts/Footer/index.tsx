import styles from './styles.module.scss';

import Github from '../../assets/images/github.svg';
import Telegram from '../../assets/images/telegram.svg';
import Medium from '../../assets/images/medium.svg';
import Twitter from '../../assets/images/twitter.svg';
import Facebook from '../../assets/images/facebook.svg';

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.paragraphs}>
            <p className={styles.subParagraph}>
              A decentralized internet is inherently faster, greener, more
              private, and more secure.
            </p>
            <p className={styles.paragraph}>
              Drive your earnings to new heights with GhostDrive's effortless
              uploading!
            </p>
          </div>
          <div className={styles.contacts}>
            <div>
              <span>Support:</span>
              <a href='mailto:help@ghostdrive.com'>help@ghostdrive.com</a>
            </div>
            <div>
              <span>Partners:</span>
              <a href='mailto:partners@ghostdrive.com'>
                partners@ghostdrive.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <span>Our company</span>
            <a href=''>About us</a>
            <a href=''>Careers</a>
            <a href=''>Press/Media</a>
          </div>
          <div>
            <span>Community</span>
            <a href=''>Discounts</a>
            <a href=''>NFT Club</a>
            <a href=''>Discord</a>
          </div>
          <div>
            <span>Partners</span>
            <a href=''>Developers</a>
            <a href=''>Data Farmers</a>
            <a href=''>Affiliate/ Reseller</a>
          </div>
          <div>
            <span>Docs</span>
            <a href=''>Ecosystem</a>
            <a href=''>Product Overview</a>
            <a href=''>Features</a>
          </div>
          <div>
            <span>Offices</span>
            <div className={styles.partners}>
              <a href=''>Singapore</a>
              <a href=''>United States</a>
              <a href=''>Middle East</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.media}>
        <img src={Github.src} alt='Github' />
        <img src={Telegram.src} alt='Twitter' />
        <img src={Medium.src} alt='Medium' />
        <img src={Twitter.src} alt='Telegram' />
        <img src={Facebook.src} alt='Facebook' />
      </div>
    </>
  );
}
