import { useState } from 'react';
import getStripe from 'lib/getStripe';

import { Button } from 'components/Button';
import { ContactUs } from 'components/ContactUs';
import Portal from 'components/HOC/Portal';
import { Modal } from 'components/Modal';
import { tableData } from './mock';

import styles from './styles.module.scss';

export const FeaturesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  let referral: any;

  if (typeof window !== 'undefined') {
    referral = new URLSearchParams(window.location.search).get('referral');
  }

  async function handleCheckout() {
    const stripe: any = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: process.env.NEXT_PUBLIC_SUCCESS,
      cancelUrl: process.env.NEXT_PUBLIC_CANCEL,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

  return (
    <>
      <h1 className={styles.title}>GHOSTDRIVE’s Features</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.name}>Features</td>
            <td className={styles.content}>
              <span>solo</span>free
            </td>
            <td className={styles.content}>
              <span>NFT BLUE WHALE</span>0.2 BNB
            </td>
            <td className={styles.content}>
              <span>Team</span>$10/mo
            </td>
            <td className={styles.content}>
              <span>Unlimited</span>custom
            </td>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ title, solo, whale, team, custom }: any) => {
            return (
              <tr key={title}>
                <td className={styles.name}>{title}</td>
                <td className={styles.content}>{solo}</td>
                <td className={styles.content}>{whale}</td>
                <td className={styles.content}>{team}</td>
                <td className={styles.content}>{custom}</td>
              </tr>
            );
          })}
          <tr>
            <td className={styles.name}></td>
            <td className={`${styles.content} ${styles.button}`}>
              <Button
                onClick={() => {}}
                text={'sign up'}
                width={{
                  desktop: 123,
                  mobile: 43,
                }}
              />
            </td>
            <td className={`${styles.content} ${styles.button}`}>
              <Button
                onClick={() => {
                  window.open(
                    `https://app.ghostdrive.io/sign-up-metamask${
                      referral ? `?referral=${referral}` : ''
                    }`
                  );
                }}
                text={'bUY'}
                width={{
                  desktop: 123,
                  mobile: 43,
                }}
              />
            </td>
            <td className={`${styles.content} ${styles.button}`}>
              <Button
                onClick={() => {
                  handleCheckout();
                }}
                text={'bUY'}
                width={{
                  desktop: 123,
                  mobile: 43,
                }}
              />
            </td>
            <td className={`${styles.content} ${styles.button}`}>
              <Button
                onClick={() => {
                  setIsOpen(true);
                  document.getElementsByTagName('body')[0].style.overflow =
                    'hidden';
                }}
                text={'Contact us'}
                width={{
                  desktop: 123,
                  mobile: 43,
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {isOpen && (
        <Portal>
          <Modal
            close={() => {
              setIsOpen(false);
              document.getElementsByTagName('body')[0].style.overflow = 'auto';
            }}
          >
            <ContactUs
              close={() => {
                setIsOpen(false);
                document.getElementsByTagName('body')[0].style.overflow =
                  'auto';
              }}
            />
          </Modal>
        </Portal>
      )}
    </>
  );
};
