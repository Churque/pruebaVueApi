import axios from "axios";

const BASE_URL = "http://54.163.208.73:8080/";

function getResenasUsuario(id) {
  return axios
    .get(`${BASE_URL}/users/${id}/reviews`)
    .then((result) => {
     const usuariosReview = result.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getResenasUsuario };
