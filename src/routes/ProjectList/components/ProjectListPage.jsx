import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectListWrapper from 'components/Wrappers/ProjectListWrapper.jsx';
import Header from 'components/ProjectList/Header.jsx';
import ProjectList from 'components/ProjectList/ProjectList.jsx';

import { projectListSelector } from 'selectors/projects.selector.js';

function mapStateToProps(state) {
  return {
    projects: projectListSelector(state),
    header: {
      title: state.getIn(['smallData', 'projectListHeader', 'data', 'title']),
      description: state.getIn(['smallData', 'projectListHeader', 'data', 'description']),
      image: state.getIn(['smallData', 'projectListHeader', 'data', 'image'])
    }
  };
}

@connect(mapStateToProps)
export default class ProjectListPage extends Component {
  render() {
    const { header, projects } = this.props;

    return (
      <ProjectListWrapper>
        <Header
          title={header.title}
          description={header.description}
          image={header.image}
        />

        <ProjectList
          projects={projects}
        />
      </ProjectListWrapper>
    );
  }
}
