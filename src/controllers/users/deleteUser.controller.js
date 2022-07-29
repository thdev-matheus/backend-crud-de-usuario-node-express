import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = (req, res) => {
  const { userId } = req.params;

  deleteUserService(userId);

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserController;
