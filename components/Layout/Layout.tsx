import React, { useCallback, useContext } from 'react';
import NavigationBar from '../NavBar/NavigationBar';
import styles from './../../styles/layout.module.scss';
import style from './../../styles/featured.module.scss';
import AddToCartButton from '../Button/AddToCartButton';
import CartContext from '../../context/CartContext';
interface IMyChildren {
  // children: JSX.Element | JSX.Element[];
  children: any;
}

const Layout = ({ children }: IMyChildren) => {
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const featuredProduct = state
    .map((product) => product)
    .filter((product) => product.featured);

  console.log(featuredProduct.map((f) => f.name));

  const { addToCart } = useContext(CartContext);

  const fetchProduct = React.useCallback(() => {
    window
      .fetch('http://localhost:1337/products')
      .then((res) => res.json())
      .then((d) => setState(d))
      .catch((e) => console.log(e));
  }, []);

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className={styles.layout}>
      <>
        <NavigationBar />
        <div className={style.featured}>
          <h1> </h1>
          {featuredProduct?.map(
            (product: {
              name:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              image: { formats: { large: { url: string | undefined } } };
            }) => (
              <>
                <div className={style.featured__textBtn}>
                  <h1>{product.name}</h1>
                  <AddToCartButton
                    onClick={() => addToCart(product)}
                    title={'Add To Cart'}
                  />
                </div>
                <div className={style.featured__wrapper}>
                  <img
                    src={product.image && product.image.formats.large.url}
                    className={style.featured__featuredImage}
                    alt=""
                  />
                  <div className={style.featured__photoOfTheDay}>
                    Photo of the day
                  </div>
                </div>
              </>
            )
          )}
        </div>
        {/* {featuredProduct.map((f) => (
          <img
            src={f.image && f.image.formats.large.url}
            className={style.featured__featuredImage}
            alt=""
          />
        ))} */}
        {children}
      </>
    </div>
  );
};

export default Layout;
