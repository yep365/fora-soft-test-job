import { axios } from "../../core";

export default {
  getUser: (userName) => axios.get(`/user`, { user: userName }),
};
