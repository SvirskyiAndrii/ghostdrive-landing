import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import styles from './styles.module.scss';

export const ContactUs = ({ close }: { close: () => void }) => {
  const [number, setNumber] = useState();

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    console.log({ name, email, number, company });
    event.target.reset();
    close();
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.inputContainer}>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' placeholder='Enter your name' required />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          placeholder='Enter your email address'
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='number'>Phone Number</label>
        <div className={styles.numberInput}>
          <PhoneInput
            placeholder='Enter phone number'
            value={number}
            name='number'
            onChange={(e: any) => {
              setNumber(e);
            }}
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='company'>Company name</label>
        <input
          name='company'
          type='text'
          placeholder='Enter your company name'
          required
        />
      </div>
      <div className={styles.buttons}>
        <button type='button' onClick={close} className={styles.cancel}>
          cancel
        </button>
        <div className={styles.wrapper}>
          <div className={styles.cool_button}>
            <button type='submit' className={styles.button}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
