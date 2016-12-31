import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CorePage from 'pages/CorePage.jsx';
import CvPage from 'pages/CvPage.jsx';
import ProjectListPage from 'pages/ProjectListPage.jsx';

export default (
  <Route path="/" component={CorePage}>
    <IndexRoute component={CvPage} />
    <Route path="projects" component={ProjectListPage} />
  </Route>
);
