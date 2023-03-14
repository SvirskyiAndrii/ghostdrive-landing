import SuccessIcon from '/public/images/success.svg';
import styles from './styles.module.scss';

export const SuccessPopup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <img src={SuccessIcon.src} alt='Success' />
        <h3>Success</h3>
        <p>
          Your message has been sent successfully and our managers will contact
          you shortly.
        </p>
      </div>
    </div>
  );
};
