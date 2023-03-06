//@ts-nocheck
import styles from './styles.module.scss';

export const Button = ({
  text,
  width,
}: {
  text: string;
  width: { desktop: number; mobile: number };
}) => {
  const calculatedWidth = (width.desktop * 100) / 1440;
  const calculatedWidthMobile = (width.mobile * 100) / 320;
  return (
    <div
      className={styles.wrapper}
      style={{
        '--width': `${calculatedWidth}vw`,
        '--width-mobile': `${calculatedWidthMobile}vw`,
      }}
    >
      <div className={styles.cool_button}>
        <div className={styles.button}>{text}</div>
      </div>
    </div>
  );
};
