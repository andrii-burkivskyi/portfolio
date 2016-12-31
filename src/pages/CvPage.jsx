import React, { Component } from 'react';

import WoodWrapper from 'components/Wrappers/WoodWrapper.jsx';
import CvBlank from 'components/CV/Blank/Blank.jsx';
import Sidebar from 'components/CV/Sidebar/Sidebar.jsx';
import Content from 'components/CV/Content/Content.jsx';

export default class CvPage extends Component {
  componentWillMount() {
    document.title = 'CV | Andrii Burkivskyi';
  }

  render() {
    return (
      <WoodWrapper>
        <CvBlank>
          <Sidebar />
          <Content />
        </CvBlank>
      </WoodWrapper>
    );
  }
}
