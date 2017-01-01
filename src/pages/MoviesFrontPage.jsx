import React, { Component } from 'react';

import InfoWrapper from 'components/Wrappers/InfoWrapper.jsx';


export default class MoviesFrontPage extends Component {
  componentWillMount() {
    document.title = 'Movies database';
  }

  render() {
    return (
      <InfoWrapper>
        Site under constraction
      </InfoWrapper>
    );
  }
}
