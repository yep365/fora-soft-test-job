import { axios } from "../../core";

export default {
  getRoom: (room) => axios.get(`/room/${room}`),
  createRoom: (postData) => axios.post("/room", postData),
};
