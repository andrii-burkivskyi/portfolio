import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Loader from 'components/Loader';

import styles from './movies__content_wrapper.scss';

const containerClass = ({ theme }) => classNames(
  styles.container,
  styles[theme]
);

const ContentWrapper = ({ isLoading, theme, children }) => (
  <div className={containerClass({ theme })}>
    {
      isLoading
        ? <Loader text="Loading..." />
        : children
    }
  </div>
);

ContentWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node
};

export default ContentWrapper;
