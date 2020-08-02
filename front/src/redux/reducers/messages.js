const initialState = {
  items: null,
  error: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        items: payload,
      };
    case "MESSAGES:ADD_MESSAGE":
      return {
        ...state,
        items: [...state.items, payload],
      };
    case "MESSAGES:FAILURE":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
