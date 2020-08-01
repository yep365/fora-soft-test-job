const initialState = {
  name: undefined,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_NAME":
      return {
        ...state,
        name: payload,
      };

    default:
      return state;
  }
};
