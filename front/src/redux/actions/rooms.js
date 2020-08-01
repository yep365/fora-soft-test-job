const Actions = {
  setCurrentRoom: (room) => ({
    type: "ROOM:SET_CURRENT_ROOM",
    payload: room,
  }),
  setRooms: (rooms) => ({
    type: "ROOM:SET_ROOMS",
    payload: rooms,
  }),
  fetchMessages: () => (dispatch) => {
    dispatch(Actions.setCurrentRoom());
  },
};
export default Actions;
