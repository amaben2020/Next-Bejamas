import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CartState from '../context/CartState';
import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartState>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </CartState>
  );
}
export default MyApp;
