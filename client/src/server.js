import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:5173",
});

export default server;
