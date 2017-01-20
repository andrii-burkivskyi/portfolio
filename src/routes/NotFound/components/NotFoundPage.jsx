import React, { Component } from 'react';

import InfoWrapper from 'components/Wrappers/InfoWrapper.jsx';

export default class NotFoundPage extends Component {
  render() {
    return (
      <InfoWrapper title="404">
        Page not found
      </InfoWrapper>
    );
  }
}
