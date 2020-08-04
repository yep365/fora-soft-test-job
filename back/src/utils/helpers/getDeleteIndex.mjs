export default (array, name, room) => {
  return new Promise((resolve, reject) => {
    array.map((obj, index) => {
      if (obj.userName === name && obj.room === room) {
        resolve(index);
      }
    });
  });
};
