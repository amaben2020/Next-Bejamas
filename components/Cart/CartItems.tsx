import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Image from 'next/image';
import styles from './../../styles/navigationBar.module.scss';
interface ICartItems {
  image: string;
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
      {cartItem?.map((c: ICartItems) => (
        <div
          key={c._id}
          style={{ border: '1px solid black', height: '20vh', width: '20vw' }}
        >
          <Image
            src={c.image.formats.thumbnail.url}
            alt="Picture of the author"
            width={70}
            height={50}
          />

          <p>{c.name}</p>
          <button onClick={clearItems}> Clear</button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
