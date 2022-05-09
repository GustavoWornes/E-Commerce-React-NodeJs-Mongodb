import axios from "axios";
import {utils}  from "../utils";
export const api = axios.create ({baseURL:"http://localhost:6001"})


export const createSession = async (email,password) => {
    return api.post("/login",{email,password})
};
const id = utils.getIdUser()

export const updateUser = async (name,sobrenome,email,password,cep,logradouro,bairro,uf) =>{
    return api.put(`/perfil/${id}`,{name,sobrenome,email,password,cep,logradouro,bairro,uf})
}
export const userRegistration = async (name,sobrenome,email,password,cep,logradouro,bairro,uf) => {
    return api.post("/criarConta",{name,sobrenome,email,password,cep,logradouro,bairro,uf})
}

/* ID de produto para teste
6257c0db5cbb58dd34b74d07  
 5eb3d668b31de5d588f42937*/