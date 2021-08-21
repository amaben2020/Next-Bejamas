import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CartState from './../context/CartState';
import CartItems from './../components/Cart/CartItems';
import NavigationBar from '../components/NavBar/NavigationBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartState>
      <>
        <NavigationBar />

        <Component {...pageProps} />
      </>
    </CartState>
  );
}
export default MyApp;
