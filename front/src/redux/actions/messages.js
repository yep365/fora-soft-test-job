const Actions = {
  setItems: (messages) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: messages,
  }),
  fetchMessages: () => (dispatch) => {
    dispatch(Actions.setItems());
  },
};
export default Actions;
