import { Button } from '../Button';
import styles from './styles.module.scss';
import MagicWave from '../../assets/images/magic-wave.png';
import Polygon from '../../assets/images/polygon.svg';
import Ethereum from '../../assets/images/ethereum.svg';
import Binance from '../../assets/images/binance.svg';
import Diamond from '../../assets/images/diamond.svg';
import Metamask from '../../assets/images/metamask.svg';
import Coinbase from '../../assets/images/coinbase.svg';
import Unstoppable from '../../assets/images/unstoppable.svg';
import CoreFeatures from '../../assets/images/core-features.png';

import PolygonRibbon from '../../assets/images/polygon-ribbon.svg';
import EthereumRibbon from '../../assets/images/ethereum-ribbon.svg';
import BinanceRibbon from '../../assets/images/binance-ribbon.svg';
import FilecoinRibbon from '../../assets/images/filecoin-ribbon.svg';
import IpfsRibbon from '../../assets/images/ipfs-ribbon.svg';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.uploadToEarn}>
        <div className={styles.title}>GHOSTDRIVE</div>
        <div className={styles.subtitle}>
          <span>1TB</span> for <span>4.99$</span>
        </div>
        <div className={styles.poster} />
        <div className={styles.information}>
          <div className={styles.informationTitle}>upload TO EARN</div>
          <div className={styles.informationText}>
            GhostDrive is a secure online workspace where users can easily
            upload and manage their files. With advanced security features,
            including end-to-end encryption and two-factor authentication.
          </div>
          <Button text='watch video' />
        </div>
      </div>
      <div className={styles.ownYourData}>
        <div className={styles.leftPart}>
          <div className={styles.popup}>
            <img src={MagicWave.src} alt='' />

            <div className={styles.informationBlock}>
              <h3>The Magic Wave art</h3>
              <p>Just one more step before it’s yours!</p>
              <Button text='0.00001BNB' />
            </div>
          </div>
          <div className={styles.poster} />
        </div>
        <div className={styles.rightPart}>
          <h2>OWN YOUR DATA with rewards</h2>
          <p>
            Tokenization true access ownership without authorities. We use 1155
            Token standard in our platform.
          </p>
          <span>Blockchain Agnostic </span>
          <div className={styles.currencies}>
            <img src={Polygon.src} alt='Polygon' />
            <img src={Binance.src} alt='Binance' />
            <img src={Ethereum.src} alt='Ethereum' />
            <img src={Diamond.src} alt='Diamond' />
          </div>
        </div>
      </div>
      <div className={styles.shareTradeCreate}>
        <div className={styles.leftPart}>
          <h2>SHARE, TRADE, CREATE</h2>
          <p>
            With every file you tokenize, you can earn tokens that can be
            redeemed for various rewards. Our tool is designed to be fast,
            efficient, and accurate, making it easy to tokenize your files with
            just a single click.
          </p>
          <div className={styles.wallets}>
            <img src={Metamask.src} alt='Metamask' />
            <img src={Coinbase.src} alt='Coinbase' />
            <img src={Unstoppable.src} alt='Unstoppable' />
          </div>
        </div>
        <div className={styles.rightPart}>
          <div className={styles.popup}></div>
          <div className={styles.poster} />
        </div>
      </div>
      <div className={styles.coreFeatures}>
        <div className={styles.top}>FOR EACH YOU UPLOAD GET REWARDS</div>
        <div className={styles.content}>
          <img src={CoreFeatures.src} alt='' />
          <div className={styles.rightPart}>
            <h2>THE CORE FEATURES</h2>
            <ul>
              <li>
                <span>Blockchain agnostic</span>
                Existing on multiple blockchains simultaneously, the GhostDRIVE
                Network is highly versatile.
              </li>
              <li>
                <span>END TO END ENCRYPTION</span>
                Files are encrypted before ever being transmitted, with multiple
                layers of end-to-end encryption.
              </li>
              <li>
                <span>Peer-to-peer</span>
                Ghostdrive is a peer-to-peer (P2P) network, where each node or
                peer acts as both a client and a server.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ribbon}>
          <div>
            <img src={PolygonRibbon.src} alt='Polygon' />
            <span>polygon</span>
          </div>
          <div>
            <img src={EthereumRibbon.src} alt='Ethereum' />
            <span>Ethereum</span>
          </div>
          <div>
            <img src={BinanceRibbon.src} alt='Binance chain' />
            <span>binance chain</span>
          </div>
          <div>
            <img src={FilecoinRibbon.src} alt='FILECOIN' />
            <span>FILECOIN</span>
          </div>
          <div>
            <img src={IpfsRibbon.src} alt='IPFS' />
            <span>IPFS</span>
          </div>
        </div>
      </div>
      <div className={styles.ghostdrivePricing}>
        <div className={styles.top}>
          <div className={styles.title}>uPGRADABLE STORAGE SOLUTION</div>
          <div className={styles.price}>
            1TB<span>-</span>$4.99
          </div>
          <div className={styles.paragraph}>earn Token system</div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>GHOSTDRIVE pricing</h2>
          <div className={styles.tableHeader}>
            <div className={styles.tabs}>
              <div className={`${styles.tab} ${styles.active}`}>
                Billed Yearly
              </div>
              <div className={styles.tab}>Billed Monthly</div>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                Solo <span>FREE</span>
              </div>
              <div className={styles.item}>
                Team <span>$9.99/mo</span>
              </div>
              <div className={styles.item}>
                Unlimited <span>CUSTOM</span>
              </div>
            </div>
          </div>
          <div className={styles.tableBody}>
            <div className={styles.row}>
              <div className={styles.rowTitle}>Upload Limit Size</div>
              <div className={styles.items}>
                <div className={styles.item}>250MB</div>
                <div className={styles.item}>1GB</div>
                <div className={styles.item}>UNLIMITED</div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.grey}`}>
              <div className={styles.rowTitle}>Workspaces</div>
              <div className={styles.items}>
                <div className={styles.item}>1</div>
                <div className={styles.item}>5</div>
                <div className={styles.item}>UNLIMITED</div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.rowTitle}>Members</div>
              <div className={styles.items}>
                <div className={styles.item}>2</div>
                <div className={styles.item}>10</div>
                <div className={styles.item}>UNLIMITED</div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.grey}`}>
              <div className={styles.rowTitle}>Storage</div>
              <div className={styles.items}>
                <div className={styles.item}>5GB</div>
                <div className={styles.item}>1TB</div>
                <div className={styles.item}>UNLIMITED</div>
              </div>
            </div>
          </div>
          <div className={styles.features}>FEATURES</div>
          <div className={styles.tableBody}>
            <div className={styles.row}>
              <div className={styles.rowTitle}>Tokenization</div>
              <div className={styles.items}>
                <div className={styles.item}>YES</div>
                <div className={styles.item}>YES</div>
                <div className={styles.item}>YES</div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.grey}`}>
              <div className={styles.rowTitle}>pages</div>
              <div className={styles.items}>
                <div className={styles.item}>YES</div>
                <div className={styles.item}>YES</div>
                <div className={styles.item}>YES</div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.rowTitle}>
                AI CREATOR
                <span>text to image/ image to image/ image scaler</span>
              </div>
              <div className={styles.items}>
                <div className={styles.item}>3 TOKENS</div>
                <div className={styles.item}>2 TOKENS</div>
                <div className={styles.item}>1 TOKENS</div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.grey}`}>
              <div className={styles.rowTitle}>VAULT</div>
              <div className={styles.items}>
                <div className={styles.item}>LIMITED</div>
                <div className={styles.item}>UNLIMITED</div>
                <div className={styles.item}>UNLIMITED</div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.rowTitle}>SECURITY</div>
              <div className={styles.items}>
                <div className={styles.item}>LIMITED</div>
                <div className={styles.item}>PRO</div>
                <div className={styles.item}>UNLIMITED</div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button text='sign up' />
            <Button text='sign up' />
            <Button text='Contact us' />
          </div>
        </div>
      </div>
      {/* <div className={styles.whaleBlock}>
        <div className={styles.leftPart}>
          <div className={styles.title}>
            <span>Get your Nft</span>
            <span>lifetime access</span>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>BABY WHALE</div>
            <div className={styles.cardRow}>
              <span>COST</span>
              <span>0.02 BNB</span>
            </div>
            <div className={styles.cardRow}>
              <span>Network</span>
              <span>BSC</span>
            </div>
          </div>
          <button>become nft member</button>
        </div>
      </div> */}
    </div>
  );
};
