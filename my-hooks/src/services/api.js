/* 
* Nesse arquivo será definido qual é a API de consumo,
*  e definir o header de authorization passando o token 
*  jwt caso o mesmo exista
*/
// Código Aqui

import axios from "axios"
import { getToken } from "./auth"

const api = axios.create({
    baseURL: "http://127.0.0.1:3333"
});


/* 
*  Aqui é usado o interceptors do Axios, que intercepta 
*  uma requisição request antes dela etetivamente acontecer
*  é verificado se existe um token no localStorage, e existindo,
*  ele adiciona o Header de Authorization na request
*/ 
api.interceptors.request.use(async config => {
    const token = getToken();
    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

export default api;
