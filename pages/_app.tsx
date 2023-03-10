import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Main } from 'layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
