import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlockFactory from 'components/CV/Block/BlockFactory.jsx';

import { fetchCv } from 'actions/cv.actions.js';

import { cvContentBlocksSelector } from 'selectors/cv.selector.js';

import styles from './Content.scss';

function mapStateToProps(state) {
  return {
    blocks: cvContentBlocksSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCvContent: () => dispatch(fetchCv('cv.content.json'))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Content extends Component {
  componentWillMount() {
    const { loadCvContent } = this.props;

    loadCvContent();
  }

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
