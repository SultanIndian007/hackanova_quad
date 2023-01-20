import axios from "axios";

export default axios.create({
  withCredentials: true,
  accessControlAllowCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
  baseURL: "http://localhost:5000"
});
