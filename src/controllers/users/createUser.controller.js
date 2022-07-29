import createUserService from "../../services/users/createUser.service";

const createUserController = async (req, res) => {
  const user = req.body;

  const createdUser = await createUserService(user);

  return res.status(201).json(createdUser);
};

export default createUserController;
