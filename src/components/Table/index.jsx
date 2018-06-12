import React from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell } from 'fixed-data-table-2';
import TextCell from './cells/TextCell';
import TextColumn from './columns/TextColumn';
import sizeMe from 'react-sizeme';

import styles from './table.scss';

const FDTable = ({ columns, data, size }) => (
    <Table
      rowHeight={50}
      rowsCount={data.length}
      headerHeight={60}
      width={size.width}
      height={size.height}
    >
      {TextColumn('id', 'ID', 1, data)}
      {TextColumn('name', 'Name', 3, data)}
    </Table>
);

const SizedFDTable = sizeMe({ monitorHeight: true, refreshRate: 100 })(FDTable);

const FDTableContainer = ({...props}) => (
  <div className={styles.container}>
    <SizedFDTable {...props} />
  </div>
);

export default FDTableContainer;
