import users from "../database/users";

const verifyUserExistMiddleware = (req, res, next) => {
  const { userId } = req.params;

  const userIndex = users.findIndex((elem) => elem.uuid === userId);

  if (userIndex < 0) {
    return res.status(404).json({ message: "User not found" });
  }

  next();
};

export default verifyUserExistMiddleware;
