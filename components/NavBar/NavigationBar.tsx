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
          <div className={styles.mynav__wrapper__minMargin}>
            <Navbar.Brand>
              <Image src="/bejamasSvg.svg" alt="me" width="194" height="24" />
            </Navbar.Brand>
          </div>

          <div>
            <Navbar.Brand
              className={styles.mynav__icon}
              onClick={toggleCartHandler}
            >
              <div className={styles.mynav__CartIcon}>
                <Image src="/Group 3.1.png" alt="me" width="37" height="34" />{' '}
                <p
                  className={
                    !cartItems.length
                      ? styles.dNone
                      : styles.mynav__CartIcon__value
                  }
                >
                  {cartItems.length}
                </p>
              </div>
            </Navbar.Brand>
          </div>

          {showCart ? <CartItems /> : cartItems.length ? <CartItems /> : null}
        </div>
      </Container>
    </div>
  );
};

export default NavigationBar;
