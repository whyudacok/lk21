import axios from "axios";

const baseURL = "https://layarkaca21.nexus";

const api = axios.create({
  baseURL,
});

export default api;
