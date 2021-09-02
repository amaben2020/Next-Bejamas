import ProductCard from '../components/ProductCard/ProductCard';
import React, { useState } from 'react';
import { API_URL } from './../data/endpoint/index';
import Featured from '../components/Featured';
import DescriptionLayout from '../components/Layout/DescriptionLayout';
import Description from '../components/Description/Description';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import styles from './../styles/product.module.scss';
import Layout from '../components/Layout/Layout';
import Filter from './../components/Filtration/app';
import Checkboxes from './../components/Filtration/Checkboxes/checkboxes';
import AppPagination from './../components/Pagination/PaginationButton';
import {
  data,
  listCheckboxesRating,
  listCheckboxesGenre,
  category,
  price,
} from './../components/Filtration/data';
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

  // const [myProducts, setMyProducts] = useState(products);

  // //evaluation array
  // const [selected, setSelected] = useState({
  //   rating: [],
  //   genre: [],
  //   category: [],
  //   price: [],
  // });

  // const handleFilters = (checkboxState: any, key: string | number) => {
  //   const logic = 'AND';
  //   //This is how we filter based on category, it holds the array value
  //   //checkboxState gives the index of the newFiltered state using indexOf
  //   const newFilters = { ...selected };
  //   // key is the array index from the checkbox state
  //   newFilters[key] = checkboxState;

  //   const hasRatings = newFilters.rating.length > 0;
  //   const hasGenres = newFilters.genre.length > 0;
  //   const hasCategory = newFilters.category.length > 0;
  //   const hasPrice = newFilters.price.length > 0;
  //   //advanced pattern to ensure strict criteria
  //   const hasFilters = hasRatings || hasGenres || hasCategory || hasPrice;
  //   const filterRating = (module: {
  //     id?: number;
  //     title?: string;
  //     rating: any;
  //     genre?: string;
  //     category?: string;
  //     price?: number;
  //   }) =>
  //     newFilters.rating.includes(0) ||
  //     newFilters.rating.includes(module.rating);
  //   const filterGenre = (module) =>
  //     newFilters.genre.includes('') || newFilters.genre.includes(module.genre);

  //   const filterCategory = (module: { category: any }) =>
  //     newFilters.category.includes('') ||
  //     newFilters.category.includes(module.category);
  //   console.log('catt', newFilters.category);

  //   const filterPrice = (module) =>
  //     newFilters.price.includes('') || newFilters.price.includes(module.price);

  //   //this filteredMovies simply extracts the movies based on the categories
  //   const filteredMovies = myProducts.filter(
  //     logic === 'OR'
  //       ? (m) =>
  //           !hasFilters ||
  //           filterRating(m) ||
  //           filterGenre(m) ||
  //           filterCategory(m) ||
  //           filterPrice(m) // OR
  //       : (m) =>
  //           !hasFilters ||
  //           ((!hasRatings || filterRating(m)) &&
  //             (!hasPrice || filterPrice(m)) &&
  //             (!hasGenres || filterGenre(m)) &&
  //             (!hasCategory || filterCategory(m))) // AND
  //   );

  //   setMyProducts(filteredMovies);
  //   setSelected(newFilters);
  // };

  ////////////////////////////////////////////////////////////////////

  // let productsPerPage = 6;
  // const pageLength = Math.ceil(products.length / productsPerPage);
  // const [pageNumber, setPageNumber] = useState(0);
  // const pagesVisited = pageNumber * productsPerPage;

  // const filteredProducts = Object.values(products).slice(
  //   pagesVisited,
  //   pagesVisited + productsPerPage
  // );

  // const changePage = ({ selected }: any) => {
  //   setPageNumber(selected);
  // };

  //////////////////////////////////////////////////////////////////////

  /// PAGINATION LOGIC VERY EASY
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

  // // This function simply sets the pageNumber value to the selected button
  // //i.e setPageNumber = 5; if there is 5 pageCount
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const alphabetSort = () => {
    return filteredProductData.sort((a: any, b: any) =>
      a.name.localeCompare(b.name)
    );
  };

  const [sortType, setSortType] = useState('asc');

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
          <div>
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
            <select name="price" id="price">
              <option onClick={() => setSortBy('price')} />

              <option onClick={() => setSortBy('price')} value="high">
                High
              </option>
            </select>
            {/* <button onClick={() => setSortItemsBy('title')}> price</button>
            <button onClick={() => setSortBy('price')}> price2</button> */}
          </div>
        </div>

        <Row className={styles.productSection__wrapper}>
          <Col lg={3} className={styles.checkboxArea}>
            <Checkboxes list={category} handleFilters={undefined} />
            <Checkboxes list={price} handleFilters={undefined} />
          </Col>

          <Col
            lg={9}
            className={styles.productSection__wrapper__productArea}
            // xs={12}
            // sm={9}
            // md={9}
          >
            {/* use HTML select */}
            {/* <button onClick={() => setOrderBy('asc')}>ASC</button>
            <button onClick={() => setOrderBy('desc')}>DESC</button>

            <button onClick={() => setOrderBy('asc')}>HIGHEST PRICE</button>
            <button onClick={() => setOrderBy('desc')}>LOWEST PRICE</button>

            <button onClick={() => setSortBy('price')}>SORT BY PRICE</button>
            <button onClick={() => setSortItemsBy('title')}>
              SORT BY TITLE
            </button> */}
            {filteredProductData?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}

            {/* {filteredProductData
              ?.filter((product: any) => !product.featured)
            
              .map((product: Product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}

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
              currentCount={productsPerPage}
            />
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default React.memo(Home);

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
