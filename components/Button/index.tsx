import styles from './styles.module.scss';

export const Button = ({ text }: { text: string }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cool_button}>
                <div className={styles.button}>{text}</div>
            </div>
        </div>
    );
};
