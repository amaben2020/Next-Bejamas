import React from 'react';
import styles from './../../styles/addToCart.module.scss';
interface IProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: IProps) => {
  const [inverted, setInverted] = React.useState(false);
  return (
    <div>
      <button className={styles.addToCart} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
