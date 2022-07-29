import users from "../../database/users";
import jwt from "jsonwebtoken";

const readOneUserService = (token) => {
  const decoded = jwt.decode(token);
  const { uuid, createdOn, updatedOn, name, email, isAdm } = users.find(
    (elem) => elem.uuid === decoded.uuid
  );

  return { uuid, createdOn, updatedOn, name, email, isAdm };
};

export default readOneUserService;
