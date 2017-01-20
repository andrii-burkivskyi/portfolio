export default function getFetchActions(actionName) {
  return {
    REQUEST: `${actionName}_REQUEST`,
    SKIPPED: `${actionName}_SKIPPED`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    CLEAR: `${actionName}_CLEAR`,
    ALL: [
      `${actionName}_REQUEST`,
      `${actionName}_SKIPPED`,
      `${actionName}_SUCCESS`,
      `${actionName}_FAILURE`,
      `${actionName}_CLEAR`
    ]
  };
}
