import { browserHistory } from 'react-router';
import { serialize } from 'utils/url';

export const redirect = (path, query) => { // eslint-disable-line
  browserHistory.push(`${path}${serialize(query)}`);
};
