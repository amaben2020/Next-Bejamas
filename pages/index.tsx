import ProductCard from '../components/ProductCard/ProductCard';
import React from 'react';
import { API_URL } from './../data/endpoint/index';
import Featured from '../components/Featured';
import DescriptionLayout from '../components/Layout/DescriptionLayout';
import Description from '../components/Description/Description';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import styles from './../styles/product.module.scss';
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
  product: MyProductsArrayInterface;
}

const Home: React.FC<ProductCardProps> = ({
  products,
  page,
  numberOfProducts,
  recommendations,
}: any) => {
  const lastPage = Math.ceil(numberOfProducts / 3);

  const router = useRouter();

  const productDetails = Object.values(products).filter(
    (prod: any) => prod.featured
  );
  return (
    <div>
      <main>
        {/* <Featured product={products} /> */}

        <DescriptionLayout>
          <Description
            text={productDetails.map((d: any) => d.details)}
            category={productDetails.map((d: any) => d.category)}
            title={productDetails.map((d: any) => d.name)}
            recommendations={recommendations}
          />
        </DescriptionLayout>

        <Row className={styles.productSection__wrapper}>
          <Col lg={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            quaerat odit possimus officiis quos rem labore adipisci! Impedit
            consequatur nobis, nisi praesentium, magnam laudantium obcaecati
            ipsam dolorem voluptate quae nihil!
          </Col>

          <Col
            lg={9}
            className={styles.productSection__wrapper__productArea}
            xs={12}
            sm={12}
          >
            {products?.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Col>
          <div style={{ display: 'flex' }}>
            <button
              disabled={page <= 1}
              onClick={() => router.push(`/?page=${page - 1}`)}
            >
              {' '}
              Prev
            </button>
            <button
              disabled={page >= lastPage}
              onClick={() => router.push(`/?page=${page + 1}`)}
            >
              Next
            </button>
          </div>
        </Row>
      </main>
    </div>
  );
};

export default React.memo(Home);

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const start = +page === 1 ? 0 : (+page - 1) * 3;
  const numProductsResponse = await fetch(`${API_URL}/products/count`);
  const numberOfProducts = await numProductsResponse.json();
  const res = await fetch(`${API_URL}/products?_limit=6&_start=${start}`);
  const products = await res.json();

  const request = await fetch(`${API_URL}/recommendations`);
  const recommendations = await request.json();

  return {
    props: {
      products,
      page: +page,
      numberOfProducts,
      recommendations,
    },
    // revalidate: 1,
  };
};
