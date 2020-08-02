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
  // newUserMessage:(name)=>(dispatch)=>{
  //   dispatch(Actions.addMessage(name));
  // },
  sendMessage: (newMessage) => (dispatch, getState) => {
    const { rooms } = getState();
    const { roomId } = rooms;

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
