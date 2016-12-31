import { fromJS } from 'immutable';
import { TOGGLE_MODAL, CLOSE_MODAL } from 'actions/modals.actions.js';

const initialModalState = fromJS({
  isOpen: false
});

function modal(state = initialModalState, action) {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return state.set('isOpen', !state.get('isOpen'));
    }

    case CLOSE_MODAL: {
      return state.set('isOpen', false);
    }

    default: {
      return state;
    }
  }
}

const initialModalsState = fromJS({});

export default function modals(state = initialModalsState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
    case CLOSE_MODAL: {
      return state.set(
          action.key,
          modal(state.get(action.key), action)
        );
    }

    default: {
      return state;
    }
  }
}
