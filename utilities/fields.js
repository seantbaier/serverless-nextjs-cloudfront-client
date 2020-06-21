import { isEmpty } from "lodash";

// eslint-disable-next-line import/prefer-default-export
export const validateField = ({ name, touched, errors, isRequired }) => {
  const isTouched = !isEmpty(touched) && touched[name];
  const hasErrors = !isEmpty(errors) && Boolean(errors[name]);
  let valid = null;
  if (isTouched) {
    if (isRequired) {
      valid = !hasErrors;
    }
  }
  const invalid = isTouched && hasErrors;
  return { isTouched, hasErrors, valid, invalid };
};
