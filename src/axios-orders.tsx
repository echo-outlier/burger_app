import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-dbe66-default-rtdb.firebaseio.com/",
});

export default instance