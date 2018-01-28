import modalsActions from 'core/modals/actions';
import { withKey } from 'utils/reducerCreator';

const initialModalState = {
  isOpen: false
};

function modal(state = initialModalState, action) {
  switch (action.type) {
    case modalsActions.TOGGLE_MODAL: {
      return { ...state, isOpen: !state.isOpen };
    }

    case modalsActions.OPEN_MODAL: {
      return { ...state, isOpen: true };
    }

    case modalsActions.CLOSE_MODAL: {
      return { ...state, isOpen: false };
    }

    default: {
      return state;
    }
  }
}

export default withKey({
  types: [modalsActions.TOGGLE_MODAL, modalsActions.OPEN_MODAL, modalsActions.CLOSE_MODAL],
  reducer: modal,
  getKeyFromAction: (action) => action.modalName
});
