import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CartState from '../context/CartState';
import NavigationBar from '../components/NavBar/NavigationBar';
import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from '../components/Featured';
import { API_URL } from '../data/endpoint/index';
import products from './products';
import ProductState from '../context/productContext/ProductState';
import { useContext } from 'react';
import ProductContext from '../context/productContext/ProductContext';
import CartContext from '../context/CartContext';

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
    <ProductState>
      <CartState>
        <>
          <Layout>
            {/* <NavigationBar /> */}

            <Component {...pageProps} />
          </Layout>
        </>
      </CartState>
    </ProductState>
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
