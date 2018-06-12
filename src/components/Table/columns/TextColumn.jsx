import React from 'react';
import PropTypes from 'prop-types';
import { Column, Cell } from 'fixed-data-table-2';
import TextCell from '../cells/TextCell';

import styles from './table_text_column.scss';

const TextColumn = (columnKey, header, flexGrow, data) => (
    <Column
      columnKey={columnKey}
      header={<Cell>{header}</Cell>}
      fixed
      cell={<TextCell data={data} />}
      flexGrow={flexGrow}
      width={300}
    />
);

TextColumn.propTypes = {
};

export default TextColumn;
