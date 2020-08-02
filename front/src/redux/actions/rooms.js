import { roomsApi } from "../../utils/api";
import { messagesActions } from "../actions";
import { socket } from "../../core";

const Actions = {
  setCurrentRoom: (room) => ({
    type: "ROOM:SET_CURRENT_ROOM",
    payload: room,
  }),

  setRoomLoading: (status) => ({
    type: "ROOM:SET_LOADING",
    payload: status,
  }),
  setRoomFailure: (status) => ({
    type: "ROOM:FAILURE",
    payload: status,
  }),
  fetchMessages: (roomId) => (dispatch, getState) => {
    const { user } = getState();
    const { userName } = user;

    roomsApi
      .getMessages(roomId, userName)
      .then(({ data }) => {
        dispatch(messagesActions.setItems(data));
        dispatch(Actions.setRoomLoading(false));
        socket.emit("ROOM:JOIN", roomId, userName);
      })
      .catch(() => {
        dispatch(messagesActions.setFaulure(true));
        dispatch(Actions.setRoomLoading(false));
      });
  },
  createRoom: (name) => (dispatch) => {
    roomsApi
      .createRoom({ name: name })
      .then(({ data }) => {
        // console.log(data.roomId);
        dispatch(Actions.setCurrentRoom(data.roomId));
      })
      .catch(() => {
        dispatch(Actions.setRoomFailure(true));
      });
  },
};
export default Actions;
