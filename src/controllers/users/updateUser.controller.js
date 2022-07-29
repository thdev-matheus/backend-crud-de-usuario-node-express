import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req, res) => {
  const { userId } = req.params;
  const updateData = req.body;

  const updatedUser = await updateUserService(userId, updateData);

  if (req.decoded.isAdm) {
    return res.status(200).json(updatedUser);
  }

  return res.status(200).json(updatedUser);
};

export default updateUserController;
