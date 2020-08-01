const initialState = {
  roomId: null,
  roomIsLoading: true,
  rooms: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ROOM:SET_CURRENT_ROOM":
      return {
        ...state,
        roomId: payload,
        roomIsLoading: true,
      };
    case "ROOM:SET_ROOMS":
      return {
        ...state,
        rooms: payload,
        roomIsLoading: false,
      };

    default:
      return state;
  }
};
