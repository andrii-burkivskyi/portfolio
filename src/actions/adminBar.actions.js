export const ADMIN_BAR_TOGGLE = 'ADMIN_BAR_TOGGLE';
export const ADMIN_BAR_CLOSE = 'ADMIN_BAR_CLOSE';
export const EDIT_TOGGLE = 'EDIT_TOGGLE';
export const SET_EDITABLE = 'SET_EDITABLE';
export const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE';
export const SET_CUSTOMIZABLE = 'SET_CUSTOMIZABLE';
export const TOGGLE_MAIL_POPUP = 'TOGGLE_MAIL_POPUP';

export function adminBarToggle() {
  return { type: ADMIN_BAR_TOGGLE };
}

export function adminBarClose() {
  return { type: ADMIN_BAR_CLOSE };
}

export function editToggle() {
  return { type: EDIT_TOGGLE };
}

export function setEditable(isEditable) {
  return { type: SET_EDITABLE, isEditable };
}

export function settingsToggle() {
  return { type: SETTINGS_TOGGLE };
}

export function setCustomizable(isCustomizable) {
  return { type: SET_CUSTOMIZABLE, isCustomizable };
}

export function toggleMailPopup() {
  return { type: TOGGLE_MAIL_POPUP };
}
