import axios from "axios";

const baseURL = "https://26fce1a5.ngrok.io";
// baseURL: http://75b95f0b.ngrok.io/
export function get(Url, params) {
  return new Promise((resolve, reject) => {
    axios.get(baseURL + Url, { params })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function post(Url, body, params) {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + Url, body, { params })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export function put(Url, body, params) {
  return new Promise((resolve, reject) => {
    axios.put(baseURL + Url, body, { params })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
