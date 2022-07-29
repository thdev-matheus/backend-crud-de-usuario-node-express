import users from "../database/users";

const verifyEmailAvailabilityMiddleware = (req, res, next) => {
  const { email } = req.body;

  const emailAlreadyExists = users.some((user) => user.email === email);

  if (emailAlreadyExists) {
    return res.status(400).json({ message: "E-mail already registered" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
