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
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { _id, image, name, price, description, numReviews } = product;
  console.log(image);
  return (
    <div className={styles.card} key={_id}>
      {/* <Image src={image.formats.thumbnail.url} /> */}

      <img
        className={styles.card__img}
        src={image && image.formats.thumbnail.url}
        // height={156}
        // width={208}
      />
      <span> $ {price}</span>
      <span>{name}</span>
      <p>{description}</p>
      <p>{numReviews}</p>
      <button className={styles.card__btn} onClick={() => addToCart(product)}>
        Add to cart
      </button>
      {/* <button style={{ background: 'red' }} onClick={() => removeFromCart(_id)}>
        Delete
      </button> */}
    </div>
  );
};

export default ProductCard;
