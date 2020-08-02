import { axios } from "../../core";
import { roomsApi } from ".";

export default {
  createRoom: (postData) => axios.post("/room", postData),
  getMessages: (roomId, name) =>
    axios.get(`/messages/${roomId}`, {
      headers: {
        name: name,
      },
    }),
};
