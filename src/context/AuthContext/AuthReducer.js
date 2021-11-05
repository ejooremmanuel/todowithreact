const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN_START":
      return {
        user: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: payload,
      };
    case "LOGIN_FAIL":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
