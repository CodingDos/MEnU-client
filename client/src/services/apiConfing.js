import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "placeholder",
  development: "http://localhost:3001/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrl.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
