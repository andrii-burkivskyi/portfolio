import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import { Blank, Content, Sidebar } from 'components/CV/Wrappers';

import { compose, lifecycle } from 'utils/hoc';

import cvActions from 'core/cv/actions';

import { cvBlocksSelector } from 'core/cv/selectors';

const mapStateToProps = (state) => ({
  sidebarBlocks: cvBlocksSelector(state, 'cv.sidebar.json'),
  contentBlocks: cvBlocksSelector(state, 'cv.content.json')
});

const mapDispatchToProps = (dispatch) => ({
  loadSidebarData: () => dispatch(cvActions.fetchCv({ key: 'cv.sidebar.json' })),
  loadContentData: () => dispatch(cvActions.fetchCv({ key: 'cv.content.json' }))
});

const CVPage = ({ sidebarBlocks, contentBlocks }) => (
  <DocumentTitle title="CV | Andrii Burkivskyi">
    <Blank>
      <Sidebar blocks={sidebarBlocks} />
      <Content blocks={contentBlocks} />
    </Blank>
  </DocumentTitle>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadSidebarData();
      this.props.loadContentData();
    }
  })
)(CVPage);
