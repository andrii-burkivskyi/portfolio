import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlockFactory from 'components/CV/Block/BlockFactory.jsx';

import { cvContentBlocksSelector } from 'selectors/cv.selector.js';

import styles from './Content.scss';

function mapStateToProps(state) {
  return {
    blocks: cvContentBlocksSelector(state)
  };
}

@connect(mapStateToProps)
export default class Content extends Component {
  render() {
    const { blocks } = this.props;

    return (
      <div className={styles.container}>
        {
          blocks.map((block) =>
            <BlockFactory
              key={block.get('slug')}
              block={block}
              black
            />
          )
        }
      </div>
    );
  }
}
