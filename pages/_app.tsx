import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CartState from '../context/CartState';
import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  _id: string;
  details: null;
  name: string;
  category: string;
  price: number;
  featured: boolean;
  bestseller: boolean;
  image: object;
  currency: string;
}

export interface MyProductsArrayInterface extends Array<Product> {}

interface ProductCardProps {
  products: MyProductsArrayInterface;
}

interface MultiInterface extends AppProps, ProductCardProps {}

function MyApp({ Component, pageProps }: MultiInterface) {
  return (
    <CartState>
      <>
        <Layout>
          {/* <NavigationBar /> */}
          <Component {...pageProps} />
        </Layout>
      </>
    </CartState>
  );
}
export default MyApp;

// export const getStaticPath = async () => {
//   const res = await fetch(`${API_URL}/products`);
//   const products = await res.json();

//   return {
//     props: {
//       products,
//     },
//     revalidate: 1,
//   };
// };
