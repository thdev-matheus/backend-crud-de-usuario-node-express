import jwt from "jsonwebtoken";
import users from "../database/users";

const verifyAuthTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  const decoded = jwt.decode(token.split(" ")[1]);
  const isUser = users.some((user) => user.email === decoded.email);

  if (!isUser) {
    return res.status(498).json({ message: "Invalid/expired token." });
  }

  jwt.verify(token.split(" ")[1], "SECRET_KEY", (err, dec) => {
    if (err) {
      return res.status(498).json({ message: "Invalid/expired token." });
    }

    req.decoded = decoded;
    next();
  });
};

export default verifyAuthTokenMiddleware;
