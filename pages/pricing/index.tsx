import { PricingBlock } from 'components/PricingBlock';

import styles from './styles.module.scss';

export default function Pricing() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GHOSTDRIVE’S Prices</h1>
      <PricingBlock />
    </div>
  );
}
