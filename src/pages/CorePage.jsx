import React, { Component } from 'react';

import AdminBar from 'components/AdminBar/AdminBar.jsx';
import MailPopup from 'components/MailPopup/MailPopup.jsx';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <AdminBar />
        {children}
        <MailPopup />
      </div>
    );
  }
}
