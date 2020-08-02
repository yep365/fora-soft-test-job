const initialState = {
  userName: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_NAME":
      return {
        ...state,
        userName: payload,
      };

    default:
      return state;
  }
};
