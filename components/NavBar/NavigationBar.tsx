import React, { useContext } from 'react';
import styles from './../../styles/navigationBar.module.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartItems from '../Cart/CartItems';
import CartContext from './../../context/CartContext';
const NavigationBar = () => {
  const { toggleCart } = useContext(CartContext);
  return (
    <Navbar className={styles.mynav} bg="light" expand="lg">
      <Container>
        <div className={styles.mynav__wrapper}>
          <Navbar.Brand>Bejamas</Navbar.Brand>
          <Navbar.Brand onClick={() => toggleCart}>Cart</Navbar.Brand>

          {toggleCart && <CartItems />}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
