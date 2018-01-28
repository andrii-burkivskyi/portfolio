import React from 'react';
import PropTypes from 'prop-types';

import { PageWrapper } from 'components/Movies/Wrappers';
import Header from 'containers/Movies/Header';

const MoviesRoot = ({ children }) => (
  <PageWrapper>
    <Header />
    {children}
  </PageWrapper>
);

MoviesRoot.propTypes = {
  children: PropTypes.node
};

export default MoviesRoot;
