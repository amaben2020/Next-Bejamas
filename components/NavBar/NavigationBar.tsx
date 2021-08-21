import React from 'react';
import styles from './../../styles/navigationBar.module.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
const NavigationBar = () => {
  return (
    <Navbar className={styles.mynav} bg="light" expand="lg">
      <Container>
        <div className={styles.mynav__wrapper}>
          <Navbar.Brand href="#home">Bejamas</Navbar.Brand>
          <Navbar.Brand href="#home">Cart</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
