import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Image from 'next/image';
import styles from './../../styles/navigationBar.module.scss';
import AddToCartButton from '../Button/AddToCartButton';
interface ICartItems {
  price: number;
  image: { formats: { thumbnail: { url: string } } };
  name: string;
  _id: string;
}

const CartItems = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const cartItem = [...cartItems];

  const clearItems = () => {
    return removeFromCart();
  };

  return (
    <div className={styles.cartItems}>
      {' '}
      {cartItem?.map((c: ICartItems) => (
        <div key={c._id} className={styles.cartItems__paddingarea}>
          <p onClick={clearItems} className={styles.cartItems__paddingarea__X}>
            &#10006;
          </p>
          <div className={styles.cartItems__flexarea}>
            <div>
              <p className={styles.cartItems__flexarea__text}>{c.name}</p>
              <p className={styles.cartItems__flexarea__price}>${c.price}</p>
            </div>
            <div className={styles.cartItems__flexarea__img}>
              <Image
                src={c.image.formats.thumbnail.url}
                alt={c.name}
                width={140}
                height={80}
              />
            </div>
          </div>
          <div className={styles.cartItems__clearBtn}>
            <AddToCartButton
              inverted="inverted"
              title={' Clear'}
              onClick={clearItems}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
