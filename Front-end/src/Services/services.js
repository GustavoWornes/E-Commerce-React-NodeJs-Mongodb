import axios from "axios";
/* eslint-disable */
import { utils } from "../utils";
const idUser = utils.getIdUser()
const idProduto = utils.getIdProduct()
export const api = axios.create({ baseURL: " https://wornesteste.herokuapp.com" })
//export const api = axios.create({ baseURL: "https://86moxy22dl.execute-api.us-east-1.amazonaws.com/Dev/data" })
/* https://wornesteste.herokuapp.com */

export const createSession = async (email, password) => {
    return api.post("/login", { email, password })
};

export const updateUser = async (name, sobrenome, email, password, cep, logradouro, bairro, uf) => {
    return api.put(`/perfil/${idUser}`, { name, sobrenome, email, password, cep, logradouro, bairro, uf })
}

export const userRegistration = async (name, sobrenome, email, password, cep, logradouro, bairro, uf) => {
    return api.post("/criarConta", { name, sobrenome, email, password, cep, logradouro, bairro, uf })
}
/* export const updateProduct = async (name,preco,cor,tamanho,terreno,sistema_de_amarracao,peso_aproximado,impermeabilizaao,drop,ajuste,descricao,precoproduto,img_principal,img_um,img_tres,img_quatro,img_dois,img_cinco) =>{
    return api.put(`/adm/descricao/${idProduto}`, {name,preco,cor,tamanho,terreno,sistema_de_amarracao,peso_aproximado,impermeabilizaao,drop,ajuste,descricao,precoproduto,img_principal,img_um,img_tres,img_quatro,img_dois,img_cinco})
}
export const deleteProduct = async (id) =>{
    return api.delete(`/adm`,{id})
}
/* ID de produto para teste
6257c0db5cbb58dd34b74d07  
 5eb3d668b31de5d588f42937*/