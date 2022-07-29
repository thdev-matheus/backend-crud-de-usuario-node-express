import users from "../database/users";

const verifyLoginEmailExistMiddleware = (req, res, next) => {
  const { email } = req.body;

  const user = users.find((elem) => elem.email === email);

  if (!user) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  next();
};

export default verifyLoginEmailExistMiddleware;
