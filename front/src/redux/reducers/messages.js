const initialState = {
  items: [],
  isLoading: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        messages: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
