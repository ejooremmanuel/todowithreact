import axios from "axios";
const url = "https://todoapibyejoor.herokuapp.com/api/v1/user/delete";

export const DeleteTask = async (_id, user) => {
  let config = {
    method: "get",
    url: `${url}/${_id}`,
    headers: {
      "access-token": user ? user.token : "",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
