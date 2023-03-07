import { useState } from 'react';
import { Button } from '../Button';
import { subscriptions } from './subscriptions';

import styles from './styles.module.scss';

export const PricingBlock = () => {
  const [data, setData] = useState(subscriptions.annually);
  let referral: any;

  if (typeof window !== 'undefined') {
    referral = new URLSearchParams(window.location.search).get('referral');
  }
  return (
    <div className={styles.content}>
      <div className={styles.tableHeader}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              data.active === 'annually' ? styles.active : ''
            }`}
            onClick={(e) => {
              setData(subscriptions.annually);
            }}
          >
            Billed Yearly
          </div>
          <div
            className={`${styles.tab} ${
              data.active === 'monthly' ? styles.active : ''
            }`}
            onClick={() => {
              setData(subscriptions.monthly);
            }}
          >
            Billed Monthly
          </div>
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
            <div className={styles.item}>{data.size.solo}</div>
            <div className={styles.item}>{data.size.team}</div>
            <div className={styles.item}>{data.size.custom}</div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.grey}`}>
          <div className={styles.rowTitle}>Workspaces</div>
          <div className={styles.items}>
            <div className={styles.item}>{data.workspace.solo}</div>
            <div className={styles.item}>{data.workspace.team}</div>
            <div className={styles.item}>{data.workspace.custom}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowTitle}>Members</div>
          <div className={styles.items}>
            <div className={styles.item}>{data.members.solo}</div>
            <div className={styles.item}>{data.members.team}</div>
            <div className={styles.item}>{data.members.custom}</div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.grey}`}>
          <div className={styles.rowTitle}>Storage</div>
          <div className={styles.items}>
            <div className={styles.item}>{data.storage.solo}</div>
            <div className={styles.item}>{data.storage.team}</div>
            <div className={styles.item}>{data.storage.custom}</div>
          </div>
        </div>
      </div>
      <div className={styles.features}>FEATURES</div>
      <div className={styles.tableBody}>
        <div className={styles.row}>
          <div className={styles.rowTitle}>Tokenization</div>
          <div className={styles.items}>
            <div className={styles.item}>{data.tokenization.solo}</div>
            <div className={styles.item}>{data.tokenization.team}</div>
            <div className={styles.item}>{data.tokenization.custom}</div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.grey}`}>
          <div className={styles.rowTitle}>pages</div>
          <div className={styles.items}>
            <div className={styles.item}>{data.pages.solo}</div>
            <div className={styles.item}>{data.pages.team}</div>
            <div className={styles.item}>{data.pages.custom}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowTitle}>
            AI CREATOR
            <span>text to image/ image to image/ image scaler</span>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>{data.ai.solo}</div>
            <div className={styles.item}>{data.ai.team}</div>
            <div className={styles.item}>{data.ai.custom}</div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.grey}`}>
          <div className={styles.rowTitle}>VAULT</div>
          <div className={styles.items}>
            <div className={styles.item}>{data.vault.solo}</div>
            <div className={styles.item}>{data.vault.team}</div>
            <div className={styles.item}>{data.vault.custom}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowTitle}>SECURITY</div>
          <div className={styles.items}>
            <div className={styles.item}>{data.security.solo}</div>
            <div className={styles.item}>{data.security.team}</div>
            <div className={styles.item}>{data.security.custom}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowTitle}></div>
          <div className={styles.items}>
            <div className={styles.item}>
              <Button
                text='sign up'
                width={{ desktop: 123, mobile: 54 }}
                onClick={() => {
                  window.open('https://ghostdrive.io/nft');
                }}
              />
            </div>
            <div className={styles.item}>
              <Button
                text='buy'
                width={{ desktop: 123, mobile: 41 }}
                onClick={() => {
                  window.open(
                    `https://app.ghostdrive.io/sign-up-metamask${
                      referral ? `?referral=${referral}` : ''
                    }`
                  );
                }}
              />
            </div>
            <div className={styles.item}>
              <Button text='Contact us' width={{ desktop: 123, mobile: 59 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
