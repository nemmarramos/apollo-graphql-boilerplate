const getAllUsers = () => new Promise((resolve) => {
  resolve([{
    id: -1,
    name: "John Doe",
  }]);
});

module.exports = {
  getAllUsers,
};
