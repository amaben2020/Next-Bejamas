import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CartState from './../context/CartState';
import CartItems from '../styles/components/Cart/CartItems';
import NavigationBar from '../styles/components/NavBar/NavigationBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartState>
      <>
        <NavigationBar />
        <CartItems />
        <Component {...pageProps} />
      </>
    </CartState>
  );
}
export default MyApp;
