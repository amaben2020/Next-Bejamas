import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Image from 'next/image';
import styles from './../../styles/navigationBar.module.scss';
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
          <div className={styles.cartItems__flexarea}>
            <div>
              <p>{c.name}</p>
              <p>{c.price}</p>
            </div>
            <div style={{ marginLeft: '2vw' }}>
              <Image
                src={c.image.formats.thumbnail.url}
                alt={c.name}
                width={100}
                height={50}
              />
            </div>
          </div>
          <button className={styles.cartItems__cartBtn} onClick={clearItems}>
            {' '}
            Clear
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
