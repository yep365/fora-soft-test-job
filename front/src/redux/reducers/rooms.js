const initialState = {
  roomId: undefined,
  isLoading: false,
  rooms: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ROOM:SET_CURRENT_ROOM":
      return {
        ...state,
        roomId: payload,
        isLoading: false,
      };
    case "ROOM:SET_ROOMS":
      return {
        ...state,
        rooms: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
