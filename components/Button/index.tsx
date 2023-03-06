import styles from './styles.module.scss';

export const Button = ({ text, width }: { text: string; width: number }) => {
  const calculatedWidth = (width * 100) / 1440;
  return (
    <div
      className={styles.wrapper}
      //@ts-ignore
      style={{ '--width': `${calculatedWidth}vw` }}
    >
      <div className={styles.cool_button}>
        <div className={styles.button}>{text}</div>
      </div>
    </div>
  );
};
