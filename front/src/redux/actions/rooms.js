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
  setRoomFailure: (errMsg) => ({
    type: "ROOM:FAILURE",
    payload: errMsg,
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
        dispatch(
          Actions.setRoomFailure("Не удалось загрузить сообщения из комнаты!")
        );
        dispatch(Actions.setRoomLoading(false));
      });
  },
  createRoom: (name) => (dispatch) => {
    roomsApi
      .createRoom({ name: name })
      .then(({ data }) => {
        dispatch(Actions.setCurrentRoom(data.roomId));
      })
      .catch(() => {
        dispatch(Actions.setRoomFailure("Не удалось создать комнату"));
      });
  },
};
export default Actions;
