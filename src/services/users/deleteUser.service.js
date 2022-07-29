import users from "../../database/users";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  return users.splice(userIndex, 1);
};

export default deleteUserService;
