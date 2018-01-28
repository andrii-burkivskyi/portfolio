import React from 'react';
import PropTypes from 'prop-types';

import BlockFactory from 'components/CV/Block';

import styles from './cv__content.scss';

const Content = ({ blocks }) => (
  <div className={styles.container}>
    {
      blocks.map((block) => (
        <BlockFactory
          key={block.slug}
          block={block}
          color="black"
        />
      ))
    }
  </div>
);

Content.propTypes = {
  blocks: PropTypes.array
};

export default Content;

