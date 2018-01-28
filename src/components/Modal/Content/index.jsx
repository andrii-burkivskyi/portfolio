import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';

import styles from './modal__content.scss';

const Content = ({ isLoading, loadingText, children }) => (
  <div className={styles.container}>
    {
      isLoading &&
        <Loader text={loadingText} />
    }
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node
};

export default Content;
