export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function toggleModal(key) {
  return { type: TOGGLE_MODAL, key };
}

export function closeModal(key) {
  return { type: CLOSE_MODAL, key };
}
