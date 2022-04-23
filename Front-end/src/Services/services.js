import axios from "axios";

export const api = axios.create ({baseURL:"http://localhost:8000"})


export const createSession = async (email,password) => {
    return api.post("/login",{email,password})
};

/* export function searchProduct(){
    return api.get('/product/6257c0db5cbb58dd34b74d07')
}
*/
export const CadastroUsuario = async (name,sobrenome,email,password,cep,logradouro,bairro,uf) => {
    return api.post("/criarConta",{name,sobrenome,email,password,cep,logradouro,bairro,uf})
}

/* 6257c0db5cbb58dd34b74d07   5eb3d668b31de5d588f42937*/