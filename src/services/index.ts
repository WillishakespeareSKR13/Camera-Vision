import AXIOS from "axios";
import { CONFIG } from "../config";

export const axios = AXIOS.create({
  baseURL: CONFIG.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
