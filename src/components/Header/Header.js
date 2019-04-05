import React from 'react';
import styles from './Header.module.css';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
      <button
        className={styles.btn}
        onClick={() => {
          console.log(
            'This will trigger a react spring animation for the sidebar'
          );
        }}
      >
        <i className="fas fa-bars" />
      </button>
    </header>
  );
};

export default Header;
