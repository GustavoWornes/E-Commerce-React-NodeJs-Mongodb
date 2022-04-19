

export const setToken = (token) => {
    
    localStorage.setItem('token', token)
}

export const getToken = () => { 
    return localStorage.getItem('token')
}

export const getUser = () => { 
     return JSON.parse(localStorage.getItem('userLocalStore'))
    
}

export const setUser = (loggedUser) => { 
    localStorage.setItem('userLocalStore', JSON.stringify(loggedUser))
}

export const clearLocalStore = () => {
   localStorage.removeItem('userLocalStore')
   localStorage.removeItem('token')
}

export const getProducInfo = () => {
    return JSON.parse(localStorage.getItem('infos'))
}

export const setProductInfo = (infos) =>{
    localStorage.setItem('infos',JSON.stringify(infos))
}
export const setIdProduct = (id) =>{
    localStorage.setItem('id',id)
}

export const getIdProduct = () =>{
    return localStorage.getItem('id')
}

