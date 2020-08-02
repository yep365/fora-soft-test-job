import { axios } from "../../core";

export default {
  uploadMessage: (postData) =>
    axios.post("messages", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
