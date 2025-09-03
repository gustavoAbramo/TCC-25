import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials : true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
//  Esse arquivo é responsável por configurar o cliente Axios para fazer requisições à API do nosso backend.

