import { messagesApi } from "../../utils/api";
import { socket } from "../../core";

const Actions = {
  setItems: (messages) => (dispatch) => {
    dispatch({
      type: "MESSAGES:SET_ITEMS",
      payload: messages,
    });
  },
  addMessage: (message) => ({
    type: "MESSAGES:ADD_MESSAGE",
    payload: message,
  }),
  sendMessage: (newMessage) => (dispatch, getState) => {
    const { rooms } = getState();
    const { roomId } = rooms;

    const sendObj = {
      text: newMessage.text,
      roomId: roomId,
      name: newMessage.user.name,
      date: new Date().toISOString(),
    };
    const messageObj = {
      text: newMessage.text,
      user: {
        name: newMessage.user.name,
      },
      date: new Date().toISOString(),
    };

    messagesApi.uploadMessage(sendObj).then((data) => {
      socket.emit("ROOM:SEND_MESSAGE", roomId, sendObj);
      dispatch(Actions.addMessage(messageObj));
    });
  },
  setFaulure: (status) => ({
    type: "MESSAGES:FAILURE",
    payload: status,
  }),
};
export default Actions;
