import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup.string().required("the name is required"),

  email: yup
    .string()
    .required("the email is required")
    .email("send a valid email"),

  password: yup.string().required("the password is required"),
  /* .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. In addition, it must contain at least 8 digits."
    ), */

  isAdm: yup
    .boolean("send a boolean value in the isAdm key")
    .required("the isAdm is required"),
});
