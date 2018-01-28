import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'utils/hoc';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import { PageWrapper } from 'components/ProjectsList/Wrappers';
import Header from 'components/ProjectsList/Header';
import List from 'components/ProjectsList/List';

import projectsListActions from 'core/projectsList/actions';

import { getProjectsList, getProjectsListHeader } from 'core/projectsList/selectors';

const mapStateToProps = (state) => ({
  header: getProjectsListHeader(state),
  projects: getProjectsList(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchHeader: () => dispatch(projectsListActions.fetchProjectsListHeader()),
  fetchProjects: () => dispatch(projectsListActions.fetchProjectsList())
});

const ProjectsList = ({ header, projects }) => (
  <DocumentTitle title="Projects list | Andrii Burkivskyi">
    <PageWrapper>
      <Header
        title={header.title}
        description={header.description}
        image={header.image}
      />

      <List projects={projects} />
    </PageWrapper>
  </DocumentTitle>
);

ProjectsList.propTypes = {
  header: PropTypes.object,
  projects: PropTypes.array
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchHeader();
      this.props.fetchProjects();
    }
  })
)(ProjectsList);
