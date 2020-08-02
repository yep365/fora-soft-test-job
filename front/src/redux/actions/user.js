const Actions = {
  setUserName: (name) => (dispatch) => {
    dispatch({
      type: "USER:SET_NAME",
      payload: name,
    });
  },
};
export default Actions;
