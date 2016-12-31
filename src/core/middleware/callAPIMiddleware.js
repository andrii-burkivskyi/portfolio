export default function callAPIMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {}
    } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every((type) => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return null;
    }

    const [requestType, successType, failureType] = types;

    dispatch({ type: requestType, ...payload });

    return callAPI().then(
      (response) => {
        if (response.ok) {
          response.json()
            .then((data) => {
              dispatch({ type: successType, ...data, response });
            });
        } else {
          response.json()
            .then((data) => {
              dispatch({ type: failureType, ...data, response });
            });
        }
      }
    );
  };
}
