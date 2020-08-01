import { messagesApi } from "../../utils/api";

const Actions = {
  setItems: (messages) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: messages,
  }),
  fetchMessages: () => (dispatch) => {
    messagesApi
      .getRoom()
      .then(({ data }) => dispatch(Actions.setItems(data)))
      .catch(() => {
        dispatch({
          type: "MESSAGES:FAILURE",
        });
      });
  },
};
export default Actions;
