import readOneUserService from "../../services/users/readOneUser.service";

const readOneUserController = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  const user = readOneUserService(token);

  return res.status(200).json(user);
};

export default readOneUserController;
