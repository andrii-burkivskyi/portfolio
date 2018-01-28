import formActions from 'core/forms/actions';
import { blurAll } from 'utils/dom';
import { getInputFieldValue } from 'core/forms/selectors';
import { redirect } from 'core/routing/actions';

const submitSearch = (event) => async (dispatch, getState) => {
  event.preventDefault();
  try {
    dispatch(formActions.submitFormRequest({ formName: 'search' }));
    const query = { query: getInputFieldValue(getState(), 'search', 'field') };
    dispatch(formActions.clearForm({ formName: 'search' }));

    blurAll();
    redirect('/movies/search', query);

    dispatch(formActions.submitFormSuccess({ formName: 'search' }));
  } catch (error) {
    dispatch(formActions.submitFormFailure({ formName: 'search' }));
  }
};

export default {
  submitSearch
};
