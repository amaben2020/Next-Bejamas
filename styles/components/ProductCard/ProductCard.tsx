import React from 'react';
import { useContext } from 'react';
import CartContext from '../../../context/CartContext';

interface Product {
  product: any;
  key: string;
}

const ProductCard: React.JSXElementConstructor<Product> = ({
  product,
}: any) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { _id, image, name, price, rating, numReviews } = product;
  return (
    <div key={_id}>
      <img src={image} />
      <span> $ {price}</span>
      <span>{name}</span>
      <p>{rating}</p>
      <p>{numReviews}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
      <button style={{ background: 'red' }} onClick={() => removeFromCart(_id)}>
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
