import { messagesApi } from "../../utils/api";

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
  uploadMessage: (newMessage) => (dispatch) => {},
  sendMessage: (newMessage) => (dispatch, getState) => {
    const { messages, rooms } = getState();
    const { items } = messages;
    const { roomId } = rooms;
    // const newArr = items.concat(Array(newMessage));
    const sendObj = {
      text: newMessage.text,
      roomId: roomId,
      name: newMessage.user.name,
    };

    messagesApi.uploadMessage(sendObj).then((data) => console.log(data));

    // dispatch(Actions.addMessage(newMessage));
    // dispatch(Actions.setItems(newArr));
  },
  setFaulure: (status) => ({
    type: "MESSAGES:FAILURE",
    payload: status,
  }),
};
export default Actions;
