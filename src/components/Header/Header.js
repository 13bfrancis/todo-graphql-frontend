import React from 'react';
import styles from './Header.module.css';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
      <button className={styles.btn}>
        <i className="fas fa-bars" />
      </button>
    </header>
  );
};

export default Header;
