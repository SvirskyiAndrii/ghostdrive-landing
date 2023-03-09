import { ReactElement, JSXElementConstructor } from 'react';

import styles from './styles.module.scss';

type ModalTypes = {
  close: () => void;
  children: ReactElement<JSXElementConstructor<any>>;
};

export const Modal = ({ close, children }: ModalTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={close} />
        {children}
      </div>
    </div>
  );
};
