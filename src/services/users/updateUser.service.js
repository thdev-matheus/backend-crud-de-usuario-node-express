import users from "../../database/users";

const updateUserService = async (id, updateData) => {
  const userIndex = users.findIndex((elem) => elem.uuid === id);

  if (updateData.hasOwnProperty("name")) {
    users[userIndex].updateName(updateData.name);
  }

  if (updateData.hasOwnProperty("email")) {
    users[userIndex].updateEmail(updateData.email);
  }

  if (updateData.hasOwnProperty("password")) {
    await users[userIndex].updatePassword(updateData.password);
  }

  if (updateData.hasOwnProperty("isAdm")) {
    users[userIndex].updateIsAdm(updateData.isAdm);
  }

  const { uuid, createdOn, updatedOn, name, email, isAdm } = users[userIndex];

  return { uuid, createdOn, updatedOn, name, email, isAdm };
};

export default updateUserService;
