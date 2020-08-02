import { axios } from "../../core";

export default {
  createRoom: (postData) => axios.post("/room", postData),
  getMessages: (roomId, name) =>
    axios.post(`/messages/${roomId}`, { name: name }),
};
