import users from "../../database/users";
import User from "../../models/user.model";

const createUserService = async (user) => {
  const newUser = new User(user);

  await newUser.updatePassword(user.password);

  users.push(newUser);

  const { uuid, createdOn, updatedOn, name, email, isAdm } = newUser;

  return { uuid, createdOn, updatedOn, name, email, isAdm };
};

export default createUserService;
