import React, { useContext } from 'react';
import styles from './../../styles/navigationBar.module.scss';
import { Container, Navbar } from 'react-bootstrap';
import CartItems from '../Cart/CartItems';
import CartContext from './../../context/CartContext';
const NavigationBar = () => {
  const { toggleCart, cartItems, showCart } = useContext(CartContext);

  const toggleCartHandler = () => {
    return toggleCart();
  };

  return (
    <Navbar className={styles.mynav} bg="light" expand="lg">
      <Container>
        <div className={styles.mynav__wrapper}>
          <Navbar.Brand>Bejamas</Navbar.Brand>
          <Navbar.Brand
            className={styles.mynav__icon}
            onClick={toggleCartHandler}
          >
            Cart
          </Navbar.Brand>

          {showCart ? <CartItems /> : cartItems.length ? <CartItems /> : null}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;