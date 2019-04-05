import React from 'react';
import style from './Spinner.module.css';

const Spinner = () => (
  <div className={style['lds-facebook']}>
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
