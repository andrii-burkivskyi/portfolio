import React, { Component } from 'react';

import MoviesMainWrapper from 'components/Wrappers/MoviesMainWrapper.jsx';
import MoviesHeader from 'components/Movies/Header/MoviesHeader.jsx';

export default class MoviesFrontPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <MoviesMainWrapper>
        <MoviesHeader />
        {children}
      </MoviesMainWrapper>
    );
  }
}
