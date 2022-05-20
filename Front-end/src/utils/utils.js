import { message ,notification,} from 'antd';
export const getIdUser =() =>{
    return localStorage.getItem('userId')
}
export const setIdUser = (userId) => {
    
    localStorage.setItem('userId', userId)
}

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
   localStorage.removeItem('userId')
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

export const setTotal= (value)=>{
    return localStorage.setItem('total',value)
}
export const getTotal = () =>{
    return localStorage.getItem('total')
}

export const notificationCart = type => {
    message.success({
        content: 'Produto Adicionado no carrinho com sucesso',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
        duration:1,
       
      });
    
  };

  export const notificationRegister = () => {
    notification.open({
        
        message: 'Cadastrado com sucesso!!',
        description: '',
      });
      setTimeout(()=>{
        window.location.reload()
    },2000)
   
  };
export const notificationLogout =() =>{
    message.success('Deslogado com sucesso!');
    setTimeout(()=>{
        window.location.reload()
    },1000)
    
  }
export const notificationUpdate =() =>{
    notification.info({
        message: `Sucess`,
        description:
          'Usuário atualizado com sucesso!',
        
      });
      setTimeout(()=>{
        window.location.reload()
    },2000)
}

export const loginError = () =>{
    message.error('Usuário ou senha invalida!');

}
export const deleteProductMessage =() =>{
    message.success('Deletado com sucesso!');
    setTimeout(()=>{
        window.location.reload()
    },1500)
}
export const updatedProduct =() =>{
    message.success('Atualizado com sucesso!');
    setTimeout(()=>{
        window.location.reload()
    },1500)
}


