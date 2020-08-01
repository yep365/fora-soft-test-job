const initialState = {
  items: [],
  messageIsLoading: false,
  error: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        messages: payload,
        isLoading: false,
      };
    case "MESSAGES:FAILURE":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
