import React from 'react';
import ReactDOM from 'react-dom';

import App from 'pages/App.jsx';

emailjs.init('user_uu6AY95f7rHrMsnisZpgt');

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('container')
  );
};

render(App);
