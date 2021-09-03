import ProductCard from '../components/ProductCard/ProductCard';
import React, { useState } from 'react';
import { API_URL } from './../data/endpoint/index';
import Featured from '../components/Featured';
import DescriptionLayout from '../components/Layout/DescriptionLayout';
import Description from '../components/Description/Description';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import styles from './../styles/product.module.scss';

import Filter from './../components/Filtration/app';
import Checkboxes from './../components/Filtration/Checkboxes/checkboxes';
import AppPagination from './../components/Pagination/PaginationButton';
import { category, price } from './../components/Filtration/data';
import Image from 'next/image';
import CustomModal from '../components/Modal/CustomModal';
import style from './../styles/modal.module.scss';
import AddToCartButton from '../components/Button/AddToCartButton';

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

  recommendations,
}: any) => {
  const productDetails = Object.values(products).filter(
    (prod: any) => prod.featured
  );
  const [status, setStatus] = useState(false);

  const categoryy = products.map(
    (product: { category: any }) => product.category
  );

  /// PAGINATION LOGIC
  //The pagination state
  const [pageNumber, setPageNumber] = React.useState(0);
  //The pagination state appointmentData per page
  const productsPerPage = 6;
  // i.e 0 * 5; how many list items to display //5 items per page
  const pagesVisited = pageNumber * productsPerPage;

  const [sortBy, setSortBy] = useState('price');

  const [orderBy, setOrderBy] = useState('asc');

  const [sortItemsBy, setSortItemsBy] = useState('title');

  const filteredProductData = Object.values(products)
    .sort((a: any, b: any): any => {
      let order = orderBy === 'asc' ? 1 : -1;
      return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
    })
    .slice(pagesVisited, pagesVisited + productsPerPage);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <main>
        <Featured product={products} />

        <DescriptionLayout>
          <Description
            text={productDetails.map((d: any) => d.details)}
            category={productDetails.map((d: any) => d.category)}
            title={productDetails.map((d: any) => d.name)}
            recommendations={recommendations}
          />
        </DescriptionLayout>
        <div className={styles.photography__section}>
          <div>
            <p className={styles.photography__section__headingPrimary}>
              Photography /{' '}
              <span className={styles.photography__section__headingSecondary}>
                {' '}
                Premium Photos{' '}
              </span>
            </p>
          </div>
          <div className={styles.photography__section__sort}>
            {' '}
            <span
              onClick={() => setOrderBy('asc')}
              className={styles.sortArrow}
            >
              &#8593;
            </span>
            <span
              onClick={() => setOrderBy('desc')}
              className={styles.sortArrow}
            >
              &#8595;
            </span>
            <span className={styles.sortText}>Sort By</span>
            <label className={styles.sortText2} htmlFor="price">
              Price
            </label>
            <select>
              <option> </option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className={styles.photography__section__modal}>
            <div onClick={() => setStatus(true)}>
              {' '}
              <Image src="/modalIcon.svg" height="30" width="35" />{' '}
            </div>

            <div>
              {status && (
                <CustomModal closeModal={() => setStatus(false)}>
                  {' '}
                  <p className={style.modalText}>Filter</p>
                  <Checkboxes list={category} handleFilters={undefined} />
                  <Checkboxes list={price} handleFilters={undefined} />
                  <div className={style.modalButtonArea}>
                    {' '}
                    <AddToCartButton
                      inverted="inverted"
                      title="Clear"
                      onClick={() => console.log('yeah')}
                    />
                    <AddToCartButton
                      title="Save"
                      onClick={() => console.log('yeah')}
                    />
                  </div>
                </CustomModal>
              )}
            </div>
          </div>
        </div>

        <Row className={styles.productSection__wrapper}>
          <Col lg={3} className={styles.checkboxArea}>
            <h2 className={styles.myCheckBoxTitle}>Category</h2>
            <Checkboxes list={category} handleFilters={undefined} />
            <Checkboxes list={price} handleFilters={undefined} />
          </Col>

          <Col lg={9} className={styles.productSection__wrapper__productArea}>
            {filteredProductData?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}

            {/*
            Uncomment to view serverSide pagination in action
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
            </div> */}

            <AppPagination
              pageCount={pageCount}
              onPageChange={changePage}
              pageRangeDisplayed={6}
              currentCount={pageNumber}
            />
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default React.memo(Home);

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  const request = await fetch(`${API_URL}/recommendations`);
  const recommendations = await request.json();

  return {
    props: {
      products,
      recommendations,
    },
  };
};

//I have created 2 types of pagination (serverSide and clientSide), please uncomment to view the different implementations. Thanks

// export const getServerSideProps = async ({ query: { page = 1 } }) => {
//   const start = +page === 1 ? 0 : (+page - 1) * 6;
//   const numProductsResponse = await fetch(`${API_URL}/products/count`);
//   const numberOfProducts = await numProductsResponse.json();
//   const res = await fetch(`${API_URL}/products?_limit=6&_start=${start}`);
//   const products = await res.json();

//   const request = await fetch(`${API_URL}/recommendations`);
//   const recommendations = await request.json();

//   return {
//     props: {
//       products,
//       page: +page,
//       numberOfProducts,
//       recommendations,
//     },
//
//   };
// };
