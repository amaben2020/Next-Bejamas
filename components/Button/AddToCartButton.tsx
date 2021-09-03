import React from 'react';
import styles from './../../styles/addToCart.module.scss';
interface IProps {
  title: string;
  onClick: () => void;
  inverted?: string;
}

const Button = ({ title, onClick, inverted }: IProps) => {
  return (
    <div>
      <button
        className={inverted ? styles.addToCartWhite : styles.addToCart}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
