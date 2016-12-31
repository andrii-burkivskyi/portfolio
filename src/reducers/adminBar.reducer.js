import { fromJS } from 'immutable';
import {
  ADMIN_BAR_TOGGLE,
  ADMIN_BAR_CLOSE,
  EDIT_TOGGLE,
  SET_EDITABLE,
  SETTINGS_TOGGLE,
  SET_CUSTOMIZABLE,
  TOGGLE_MAIL_POPUP
} from 'actions/adminBar.actions.js';

const initialState = fromJS({
  isOpen: false,
  isEdit: false,
  isEditable: true,
  isSettings: false,
  isCustomizable: true,
  isMailPopupOpen: false
});

export default function adminBar(state = initialState, action) {
  switch (action.type) {
    case ADMIN_BAR_TOGGLE: {
      return state.set('isOpen', !state.get('isOpen'));
    }

    case ADMIN_BAR_CLOSE: {
      return state.set('isOpen', false);
    }

    case EDIT_TOGGLE: {
      if (!state.get('isEditable')) { return state; }

      return state
        .set('isEdit', !state.get('isEdit'))
        .set('isSettings', false)
        .set('isOpen', false);
    }

    case SET_EDITABLE: {
      return state.set('isEditable', action.isEditable);
    }

    case SETTINGS_TOGGLE: {
      if (!state.get('isCustomizable')) { return state; }

      return state
        .set('isSettings', !state.get('isSettings'))
        .set('isEdit', false)
        .set('isOpen', false);
    }

    case SET_CUSTOMIZABLE: {
      return state.set('isCustomizable', action.isCustomizable);
    }

    case TOGGLE_MAIL_POPUP: {
      return state.set('isMailPopupOpen', !state.get('isMailPopupOpen'));
    }

    default:
      return state;
  }
}
