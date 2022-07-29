import loginUserService from "../../services/login/loginUser.service";

const loginUserController = (req, res) => {
  const { email } = req.body;

  const loggedUser = loginUserService(email);

  return res.status(200).json(loggedUser);
};

export default loginUserController;
