import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import Wrapper from 'components/Wrapper';
import Table from 'components/Table';

import 'fixed-data-table-2/dist/fixed-data-table.css';

const data = [
  { id: 1, name: 'Andrey' },
  { id: 2, name: 'Igor' }
]

const Root = () => (
  <DocumentTitle title="UI | Root">
    <Wrapper theme="ui_root">
      <Table data={data} />
    </Wrapper>
  </DocumentTitle>
);

export default {
  component: Root
};
