import users from "../database/users";

import jwt from "jsonwebtoken";

const verifyIsAdmMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const decoded = jwt.decode(token);

  if (!decoded.isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyIsAdmMiddleware;
