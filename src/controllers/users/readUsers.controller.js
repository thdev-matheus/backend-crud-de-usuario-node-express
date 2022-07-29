import readUsersService from "../../services/users/readUsers.service";

const readUsersController = (req, res) => {
  const readedUsers = readUsersService();

  return res.status(200).json(readedUsers);
};

export default readUsersController;
