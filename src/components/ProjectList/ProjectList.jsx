import React, { Component } from 'react';

import ProjectItem from './ProjectItem.jsx';

import styles from './ProjectList.scss';

export default class ProjectList extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className={styles.container}>
        {
          projects.map((project) =>
            <ProjectItem
              key={project.get('slug')}
              image={project.get('image')}
              description={project.get('description')}
              technologies={project.get('technologies')}
              title={project.get('title')}
              url={project.get('url')}
            />
          )
        }
      </div>
    );
  }
}
