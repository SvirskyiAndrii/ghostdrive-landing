import { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Portal from 'components/HOC/Portal';

import 'react-phone-number-input/style.css';
import styles from './styles.module.scss';

const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

export const ContactUs = ({
  close,
  setIsSuccess,
}: {
  close: () => void;
  setIsSuccess: any;
}) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState<any>('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const [errors, setErrors] = useState<any>({ number: null, email: null });

  useEffect(() => {
    if (email && number && name && company && !errors.email && !errors.number) {
      setIsDisabled(false);
    } else {
      !isDisabled && setIsDisabled(true);
    }
  }, [email, number, name, company, errors]);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    // send to backend
    setEmail('');
    setNumber('');
    setName('');
    setCompany('');
    close();
    setIsSuccess(true);
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit} autoComplete='off'>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.inputContainer}>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          type='text'
          value={name}
          placeholder='Enter your name'
          onChange={(e) => {
            setName(e.target.value);
          }}
          maxLength={64}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.match(EMAIL_REGEX) || e.target.value === '') {
                errors?.email &&
                  setErrors({
                    number: errors?.number,
                    email: null,
                  });
              } else {
                setErrors({
                  number: errors?.number,
                  email: 'Incorrect email address',
                });
              }
            }}
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
            errors?.number ? styles.notValid : ''
          }`}
        >
          <PhoneInput
            placeholder='Enter phone number'
            value={number}
            name='number'
            maxLength={64}
            onChange={(e: any) => {
              setNumber(e);
            }}
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
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          placeholder='Enter your company name'
          maxLength={64}
          required
        />
      </div>
      <div className={styles.buttons}>
        <button type='button' onClick={close} className={styles.cancel}>
          cancel
        </button>
        <div className={styles.wrapper}>
          <div className={styles.cool_button}>
            <button
              type='submit'
              className={styles.button}
              disabled={isDisabled}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
