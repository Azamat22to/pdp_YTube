import axios from "axios";
export const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export const REACT_APP_API_KEY="AIzaSyC51nMFkqtAafc0uHj57v2g-XThgVa8NLo";

