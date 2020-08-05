export default (err, req, res, next) => {
  console.error(err.stack);
  res.sendStatus(500);
};
