import { Button } from '../Button';
import styles from './styles.module.scss';

export const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.uploadToEarn}>
                <div className={styles.title}>GHOSTDRIVE</div>
                <div className={styles.subtitle}>
                    <span>1TB</span> for <span>4.99$</span>
                </div>
                <div className={styles.poster} />
                <div className={styles.information}>
                    <div className={styles.informationTitle}>upload TO EARN</div>
                    <div className={styles.informationText}>
                        GhostDrive is a secure online workspace where users can easily upload and manage their files.
                        With advanced security features, including end-to-end encryption and two-factor authentication.
                    </div>
                    <Button text="watch video" />
                </div>
            </div>
        </div>
    );
};
