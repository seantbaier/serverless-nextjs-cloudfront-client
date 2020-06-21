import { string } from "yup";

const Email = string()
  .email("Email address is not valid")
  .required("Please enter an email address");

const RequiredString = (message) => string().required(message);

export { RequiredString, Email };
