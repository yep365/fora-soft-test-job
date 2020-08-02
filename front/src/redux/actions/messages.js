const Actions = {
  setItems: (messages) => (dispatch) => {
    dispatch({
      type: "MESSAGES:SET_ITEMS",
      payload: messages,
    });
  },
  setFaulure: (status) => ({
    type: "MESSAGES:FAILURE",
    payload: status,
  }),
};
export default Actions;
