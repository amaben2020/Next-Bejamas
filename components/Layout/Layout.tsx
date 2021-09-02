import React, { useCallback, useContext } from 'react';
import NavigationBar from '../NavBar/NavigationBar';
import styles from './../../styles/layout.module.scss';
import style from './../../styles/featured.module.scss';
import AddToCartButton from '../Button/AddToCartButton';
import CartContext from '../../context/CartContext';
import { API_URL } from '../../data/endpoint';
import Description from '../Description/Description';

interface IMyChildren {
  // children: JSX.Element | JSX.Element[];
  children: any;
}

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

interface MultiInterface extends IMyChildren, ProductCardProps {}

const Layout = ({ children }: MultiInterface) => {
  const [state, setState] = React.useState<MyProductsArrayInterface>([]);
  const [loading, setLoading] = React.useState(false);

  const featuredProduct = state
    .map((product) => product)
    .filter((product) => product.featured);

  const { addToCart } = useContext(CartContext);

  const fetchProduct = React.useCallback(() => {
    window
      .fetch(`${API_URL}/products`)
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
          {featuredProduct?.map((product) => (
            <>
              <div className={style.featured__textBtn}>
                <h1 className={style.featured__heading}>{product.name}</h1>
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
          ))}
        </div>

        {children}
      </>
    </div>
  );
};

export default Layout;
