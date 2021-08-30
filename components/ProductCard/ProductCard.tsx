import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import styles from '../../styles/card.module.scss';
interface Product {
  product: any;
  key: string;
}

const ProductCard: React.JSXElementConstructor<Product> = ({
  product,
}: any) => {
  const { addToCart } = useContext(CartContext);
  const { _id, image, name, price, description, numReviews } = product;

  return (
    <div className={styles.card} key={_id}>
      <img
        className={styles.card__img}
        src={image && image.formats.thumbnail.url}
      />
      <span> $ {price}</span>
      <span>{name}</span>
      <p>{description}</p>
      <p>{numReviews}</p>
      <button className={styles.card__btn} onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
