import users from "../../database/users";
import jwt from "jsonwebtoken";

const loginUserService = (email) => {
  const user = users.find((elem) => elem.email === email);

  const token = jwt.sign(
    { uuid: user.uuid, email: email, isAdm: user.isAdm },
    "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );

  return { ...user, token: token };
};

export default loginUserService;
