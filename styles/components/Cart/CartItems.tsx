import React from 'react';
import { useContext } from 'react';
import CartContext from '../../../context/CartContext';
import Image from 'next/image';
const CartItems = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const cartItem = [...cartItems];

  return (
    <div>
      {cartItem?.map((c: any) => (
        <div key={c._id}>
          {/* <Image
            src={c.image}
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}
          <img src={c.image} alt="img" />
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
