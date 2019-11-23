export const required = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

export const minLength = (min = 2) => (value) => {
  let error;
  if (value.length > 0 && value.length < min) {
    error = `Min Length ${min}`;
  }
  return error;
};

export const validateArray = (arr) => (val) => {
  for (let i = 0; i < arr.length; i++) {
    const err = arr[i](val);
    if (err) {
      return err;
    }
  }
  return undefined;
};
