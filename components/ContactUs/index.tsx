import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import styles from './styles.module.scss';

export const ContactUs = ({ close }: { close: () => void }) => {
  const [number, setNumber] = useState<any>();
  const [errors, setErrors] = useState<any>(null);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email: any = formData.get('email');
    const company = formData.get('company');
    const collectedErrors: any = {};

    if (email?.length > 20) {
      collectedErrors.email = 'Incorrect email address';
    }
    if (number?.length > 20) {
      collectedErrors.number = 'Incorrect phone number';
    }

    setErrors(collectedErrors);

    if (!collectedErrors.email && !collectedErrors.number) {
      console.log({ name, email, number, company });
      event.target.reset();
      close();
    }
  };

  const clearInputs = () => {
    if (errors) {
      setErrors(null);
    }
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.inputContainer}>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          type='text'
          placeholder='Enter your name'
          onFocus={clearInputs}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='email'>Email</label>
        <div className={styles.errors}>
          <input
            className={errors?.email ? styles.notValid : ''}
            name='email'
            type='email'
            placeholder='Enter your email address'
            onFocus={clearInputs}
            required
          />
          {errors?.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='number'>Phone Number</label>
        <div
          className={`${styles.numberInput} ${
            errors?.email ? styles.notValid : ''
          }`}
        >
          <PhoneInput
            className={errors?.email ? styles.notValid : ''}
            placeholder='Enter phone number'
            value={number}
            name='number'
            onChange={(e: any) => {
              setNumber(e);
            }}
            onFocus={clearInputs}
          />
          {errors?.number && (
            <span className={styles.error}>{errors.number}</span>
          )}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='company'>Company name</label>
        <input
          name='company'
          type='text'
          placeholder='Enter your company name'
          onFocus={clearInputs}
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
