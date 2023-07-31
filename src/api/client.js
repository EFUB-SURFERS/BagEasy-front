import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibmNtZGJldkBnbWFpbC5jb20iLCJpYXQiOjE2OTAwMDA1MzQsImV4cCI6MTY5MDYwNTMzNH0.tx3vDZhL9x6nwTTWJQ6SXz8ZVMRZPkT4nxiE4l5O5tE"

console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"],
);

export default client;
