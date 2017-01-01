import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CorePage from 'pages/CorePage.jsx';
import CvPage from 'pages/CvPage.jsx';
import ProjectListPage from 'pages/ProjectListPage.jsx';
import MoviesFrontPage from 'pages/MoviesFrontPage.jsx';
import NotFoundPage from 'pages/NotFoundPage.jsx';

export default (
  <Route path="/" component={CorePage}>
    <IndexRoute component={CvPage} />
    <Route path="projects" component={ProjectListPage} />
    <Route path="movies">
      <IndexRoute component={MoviesFrontPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
