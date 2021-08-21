import React, { useContext } from 'react';
import style from './../styles/featured.module.scss';
import CartContext from './../context/CartContext';
import AddToCartButton from './Button/AddToCartButton';
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
const Featured: React.JSXElementConstructor<ProductCardProps> = ({
  product,
}: any) => {
  const featuredProduct = product.filter(
    (product: { featured: any }): any => product.featured
  );

  const { addToCart } = useContext(CartContext);

  return (
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
            <h1>{product.name}</h1>
            <AddToCartButton
              onClick={() => addToCart(product)}
              title={'Add To Cart'}
            />
            <img
              src={product.image && product.image.formats.large.url}
              style={{ width: '100%', height: '50vh' }}
              alt=""
            />
          </>
        )
      )}
    </div>
  );
};

export default Featured;
