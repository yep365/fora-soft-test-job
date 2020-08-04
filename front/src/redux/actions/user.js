const Actions = {
  setUserName: (name) => ({
    type: "USER:SET_NAME",
    payload: name,
  }),
  setActiveUsers: (activeUsers) => ({
    type: "USER:SET_ACTIVE_USERS",
    payload: activeUsers,
  }),
};
export default Actions;
