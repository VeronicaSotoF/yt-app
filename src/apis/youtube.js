import axios from "axios";

const KEY = "AIzaSyC8UWnaX_9ks1MaV3j5gDkuU1gP_NVjI-w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
