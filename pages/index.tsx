import ProductCard from '../components/ProductCard/ProductCard';
import { useState } from 'react';
import React from 'react';
import { API_URL } from './../data/endpoint/index';
import Featured from '../components/Featured';
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

const Home: React.FC<ProductCardProps> = ({ products }: any) => {
  const [productss, setProducts] = useState<Product[]>(products);
  console.log(products);
  return (
    <div>
      <main>
        <Featured products={products} />

        <section>
          {products?.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default React.memo(Home);

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  console.log('products ==>', products);
  return {
    props: { products },
    revalidate: 1,
  };
};
