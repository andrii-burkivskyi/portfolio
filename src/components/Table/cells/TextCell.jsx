import React from 'react';
import PropTypes from 'prop-types';

import { Cell } from 'fixed-data-table-2';

import styles from './table_text_cell.scss';

const TextCell = ({ rowIndex, columnKey, data, ...props }) => (
  <Cell className={styles.container}>
    {data[rowIndex][columnKey]}
  </Cell>
);

TextCell.propTypes = {
};

export default TextCell;
