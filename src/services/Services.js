import axios from "axios";
const url = "https://todoapibyejoor.herokuapp.com/api/v1/user";

export const DeleteTask = async (_id, user) => {
  let config = {
    method: "get",
    url: `${url}/delete/${_id}`,
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

export const UpdateTask = async (user, image) => {
  let config = {
    method: "put",
    url: `${url}/update/${user.user._id}`,
    headers: {
      "access-token": user ? user.token : "",
      "Content-Type": "application/json",
    },
    image,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const addProfilePic = async (user, data, setI, dispatch) => {
  let config = {
    method: "put",
    url: `${url}/update/${user.user._id}`,
    headers: {
      "access-token": user ? user.token : "",
      "Content-Type": "application/json",
    },
    data,
  };
  try {
    const { data } = await axios(config);
    setI(data.founduser.avatarSmall);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};
