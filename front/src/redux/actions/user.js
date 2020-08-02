import cyrillicToTranslit from "cyrillic-to-translit-js";

const Actions = {
  setUserName: (name) => (dispatch) => {
    dispatch({
      type: "USER:SET_NAME",
      payload: name,
    });
    let engName = cyrillicToTranslit().transform(name, "_");
    dispatch({
      type: "USER:SET_ENG_NAME",
      payload: engName,
    });
  },
};
export default Actions;
