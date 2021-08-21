import React from 'react';
import styles from './../../styles/layout.module.scss';
interface IMyChildren {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: IMyChildren) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
