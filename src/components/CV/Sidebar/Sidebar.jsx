import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlockFactory from 'components/CV/Block/BlockFactory.jsx';

import { cvSidebarBlocksSelector } from 'selectors/cv.selector.js';

import styles from './Sidebar.scss';

function mapStateToProps(state) {
  return {
    blocks: cvSidebarBlocksSelector(state)
  };
}

@connect(mapStateToProps)
export default class Sidebar extends Component {
  render() {
    const { blocks } = this.props;

    return (
      <div className={styles.container}>
        {
          blocks.map((block) =>
            <BlockFactory
              key={block.get('slug')}
              block={block}
            />
          )
        }
      </div>
    );
  }
}
