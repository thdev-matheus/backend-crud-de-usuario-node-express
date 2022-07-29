import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

export default class User {
  constructor({ name, email, password, isAdm }) {
    this.uuid = uuidv4();
    this.createdOn = new Date(Date.now());
    this.updatedOn = new Date(Date.now());
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdm = isAdm;
  }

  newUpdatedDate() {
    this.updatedOn = new Date(Date.now());
  }

  updateName(name) {
    this.name = name;
    this.newUpdatedDate();
  }

  updateEmail(email) {
    this.email = email;
    this.newUpdatedDate();
  }

  async updatePassword(password) {
    this.password = await bcrypt.hash(password, 10);
    this.newUpdatedDate();
  }

  updateIsAdm(isAdm) {
    this.isAdm = isAdm;
  }
}
