import { useState } from 'react';
import styles from './styles.module.scss';

const codes = [1, 2, 3, 380, 25, 30, 13, 3162, 59595, 23, 60, 70, 100, 8];

export const ContactUs = ({ close }: { close: () => void }) => {
  const [countryCode, setCountryCode] = useState(1);
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
    const company = formData.get('company');
    console.log({ name, email, number: `${countryCode}${number}`, company });
    event.target.reset();
    close();
  };

  const toggleSelect = () => {
    setIsSelectOpened(!isSelectOpened);
  };

  const setCode = (code: number) => {
    setCountryCode(code);
    setIsSelectOpened(false);
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
          <div className={styles.select}>
            <div
              className={`${styles.current} ${
                isSelectOpened ? styles.opened : ''
              }`}
              onClick={toggleSelect}
            >
              +{countryCode}
            </div>
            {isSelectOpened && (
              <div className={styles.codes}>
                {codes.map((item: number) => {
                  return (
                    <div
                      className={styles.code}
                      key={item}
                      onClick={() => {
                        setCode(item);
                      }}
                    >
                      +{item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <input
            name='number'
            type='number'
            placeholder='555 000-0000'
            required
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
