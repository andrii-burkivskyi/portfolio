import React from 'react';
import PropTypes from 'prop-types';

import BlockFactory from 'components/CV/Block';

import styles from './cv__sidebar.scss';

const Sidebar = ({ blocks }) => (
  <div className={styles.container}>
    {
      blocks.map((block) => (
        <BlockFactory
          key={block.slug}
          block={block}
          color="white"
        />
      ))
    }
  </div>
);

Sidebar.propTypes = {
  blocks: PropTypes.array
};

export default Sidebar;
