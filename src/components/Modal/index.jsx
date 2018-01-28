import React from 'react';

import styles from './modal.scss';

const disableScroll = (isDisable) => {
  const body = document.getElementsByTagName('body')[0];

  if (isDisable) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
};

const Modal = ({ children, isOpen }) => {
  disableScroll(isOpen);
  if (!isOpen) { return null; }

  return (
    <div className={styles.overlay}>
      <div className={styles.interlayer}>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
export Header from './Header';
export Content from './Content';
export Footer from './Footer';
