import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export const allTasks = async () => {
  let config = {
    method: "get",
    url: "https://todoapibyejoor.herokuapp.com/api/v1/user/task",
    headers: {
      "access-token": user ? user.token : "",
      "Content-Type": "application/json",
    },
  };
  try {
    let res = await axios(config);
    let items = res.data.task;
    return items;
  } catch (err) {
    console.log(err.response.data);
  }
};
