import axios from "axios";

export function GetApi(url, data) {
  return axios({
    baseURL: "http://localhost:3000/" + url,
    method: "post",
    data,
  });
}
