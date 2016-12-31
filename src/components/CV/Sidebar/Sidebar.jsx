import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlockFactory from 'components/CV/Block/BlockFactory.jsx';

import { fetchCv } from 'actions/cv.actions.js';

import { cvSidebarBlocksSelector } from 'selectors/cv.selector.js';

import styles from './Sidebar.scss';

function mapStateToProps(state) {
  return {
    blocks: cvSidebarBlocksSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCvSidebar: () => dispatch(fetchCv('cv.sidebar.json'))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Sidebar extends Component {
  componentWillMount() {
    const { loadCvSidebar } = this.props;

    loadCvSidebar();
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
            />
          )
        }
      </div>
    );
  }
}
