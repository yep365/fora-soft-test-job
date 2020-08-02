const initialState = {
  roomId: null,
  roomIsLoading: true,
  rooms: [],
  error: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ROOM:SET_CURRENT_ROOM":
      return {
        ...state,
        roomId: payload,
      };
    case "ROOM:SET_ROOMS":
      return {
        ...state,
        rooms: payload,
      };
    case "ROOM:FAILURE":
      return {
        ...state,
        error: payload,
      };
    case "ROOM:SET_LOADING":
      return {
        ...state,
        roomIsLoading: payload,
      };

    default:
      return state;
  }
};
