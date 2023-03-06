import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.scss';

type MainLayoutProps = {
  children: any;
};

export const Main = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
