const initialState = {
  userName: null,
  engName: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_NAME":
      return {
        ...state,
        userName: payload,
      };
    case "USER:SET_ENG_NAME":
      return {
        ...state,
        engName: payload,
      };

    default:
      return state;
  }
};
