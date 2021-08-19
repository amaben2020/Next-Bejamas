import styles from '../styles/Home.module.css';
import text from './../styles/text.module.scss';
import products from './../data/data';
import ProductCard from '../styles/components/ProductCard/ProductCard';
import { useState } from 'react';
import React from 'react';
interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  numReviews: number;
}

export interface MyProductsArrayInterface extends Array<Product> {}

interface ProductCardProps {
  product: MyProductsArrayInterface;
  key: string;
}

const Home: React.FC<ProductCardProps> = () => {
  const [productss, setProducts] = useState<Product[]>(products);

  return (
    <div>
      <main className={styles.main}>
        <h1 className={text.purp}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <section>
          {productss?.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default React.memo(Home);

// const getStaticServerSideProps = ( ) => {

//   const res =
// }
