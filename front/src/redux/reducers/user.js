const initialState = {
  userName: null,
  activeUsers: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_NAME":
      return {
        ...state,
        userName: payload,
      };
    case "USER:SET_ACTIVE_USERS":
      return {
        ...state,
        activeUsers: payload,
      };

    default:
      return state;
  }
};
