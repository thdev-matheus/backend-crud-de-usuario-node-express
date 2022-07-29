import users from "../database/users";
import * as bcrypt from "bcryptjs";

const verifyPasswordMatchMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  const user = users.find((elem) => elem.email === email);

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  next();
};

export default verifyPasswordMatchMiddleware;
