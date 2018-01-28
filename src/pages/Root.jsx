import React from 'react';

import AdminBar from 'containers/AdminBar';
import MailPopup from 'containers/Modals/Email';

const RootPage = ({ children }) => (
  <div>
    <AdminBar />
    {children}
    <MailPopup />
  </div>
);

export default RootPage;
