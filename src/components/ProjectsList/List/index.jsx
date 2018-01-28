import React from 'react';
import PropTypes from 'prop-types';

import ProjectItem from 'components/ProjectsList/Item';

import styles from './projects_list__list.scss';

const List = ({ projects }) => (
  <div className={styles.container}>
    {
      projects.map((project) => (
        <ProjectItem
          key={project.slug}
          image={project.image}
          description={project.description}
          technologies={project.technologies}
          title={project.title}
          url={project.url}
        />
      ))
    }
  </div>
);

List.propTypes = {
  projects: PropTypes.array
};

export default List;
