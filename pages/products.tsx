import ProductCard from '../components/ProductCard/ProductCard';
import React from 'react';
import { API_URL } from './../data/endpoint/index';
import Featured from '../components/Featured';
import DescriptionLayout from '../components/Layout/DescriptionLayout';
import Description from '../components/Description/Description';
import { useRouter } from 'next/router';

interface Product {
  // _id: string;
  // name: string;
  // image: string;
  // price: number;
  // rating: number;
  // numReviews: number;
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
  product: MyProductsArrayInterface;
}

const Home: React.FC<ProductCardProps> = ({
  products,
  page,
  numberOfProducts,
}: any) => {
  const lastPage = Math.ceil(numberOfProducts / 3);
  const router = useRouter();

  return (
    <div style={{ position: 'relative' }}>
      <main>
        <Featured product={products} />
        <DescriptionLayout>
          <Description text="My text oooo" />
        </DescriptionLayout>
        <section>
          {products?.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>

        <div style={{ display: 'flex' }}>
          <button
            disabled={page <= 1}
            onClick={() => router.push(`/products?page=${page - 1}`)}
          >
            {' '}
            Prev
          </button>
          <button
            disabled={page >= lastPage}
            onClick={() => router.push(`/products?page=${page + 1}`)}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default React.memo(Home);

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const start = +page === 1 ? 0 : (+page - 1) * 3;
  const numProductsResponse = await fetch(`${API_URL}/products/count`);
  const numberOfProducts = await numProductsResponse.json();
  const res = await fetch(`${API_URL}/products?_limit=2&_start=${start}`);
  const products = await res.json();
  return {
    props: {
      products,
      page: +page,
      numberOfProducts,
    },
    // revalidate: 1,
  };
};
