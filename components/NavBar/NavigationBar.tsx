import React, { useContext } from 'react';
import styles from './../../styles/navigationBar.module.scss';
import { Container, Navbar } from 'react-bootstrap';
import CartItems from '../Cart/CartItems';
import CartContext from './../../context/CartContext';
import Image from 'next/image';
const NavigationBar = () => {
  const { toggleCart, cartItems, showCart } = useContext(CartContext);

  const toggleCartHandler = () => {
    return toggleCart();
  };

  return (
    <div className={styles.mynav}>
      <Container>
        <div className={styles.mynav__wrapper}>
          <Navbar.Brand>
            <Image src="/bejamasSvg.svg" alt="me" width="194" height="24" />
          </Navbar.Brand>
          <Navbar.Brand
            className={styles.mynav__icon}
            onClick={toggleCartHandler}
          >
            <div className={styles.mynav__CartIcon}>
              <Image src="/Group 3.1.png" alt="me" width="44" height="34" />{' '}
              <p className={styles.mynav__CartIcon__value}>
                {cartItems.length}
              </p>
            </div>
          </Navbar.Brand>

          {showCart ? <CartItems /> : cartItems.length ? <CartItems /> : null}
        </div>
      </Container>
    </div>
  );
};

export default NavigationBar;
