import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CartState from './../context/CartState';
import NavigationBar from '../components/NavBar/NavigationBar';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartState>
      <>
        <Layout>
          <NavigationBar />
          <Component {...pageProps} />
        </Layout>
      </>
    </CartState>
  );
}
export default MyApp;
