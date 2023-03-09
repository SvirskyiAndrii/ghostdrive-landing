import styles from './styles.module.scss';

export const ContactUs = ({ close }: { close: () => void }) => {
  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
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
        <input
          name='number'
          type='number'
          placeholder='555 000-0000'
          required
        />
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
