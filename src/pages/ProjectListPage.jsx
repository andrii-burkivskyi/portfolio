import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectListWrapper from 'components/Wrappers/ProjectListWrapper.jsx';
import Header from 'components/ProjectList/Header.jsx';
import ProjectList from 'components/ProjectList/ProjectList.jsx';

import { fetchProjects } from 'actions/projects.actions.js';

import { projectListSelector } from 'selectors/projects.selector.js';


function mapStateToProps(state) {
  return {
    projects: projectListSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProjects: () => dispatch(fetchProjects())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProjectListPage extends Component {
  componentWillMount() {
    const { loadProjects } = this.props;

    document.title = 'Project list | Andrii Burkivskyi';

    loadProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <ProjectListWrapper>
        <Header />
        <ProjectList projects={projects} />
      </ProjectListWrapper>
    );
  }
}
