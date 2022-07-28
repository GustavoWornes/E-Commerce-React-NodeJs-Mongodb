import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect} from "react-router-dom"


import HomePage from '../pages/Home'
import LoginUser from '../pages/Login'
import PageProduto from '../pages/PageProduto'
import PageCarrinho from '../pages/Carrinho'
import Page404 from "../pages/404/Page404";
import { utils } from "../utils"
import Perfil from "../pages/Perfil"
import { CartProvider } from "../contexts/auth"
import Cadastro from "../pages/Cadastro"

const AppRoutes = () => {
    const Private = ({ children }) => {
        const authenticated = utils.getUser()
        
        if (!authenticated) {   
            return <Redirect to="/login" />
        } return children;
    };
  

    /* Private está fazendo a verificação se o usuario está autenticado,se não estiver vai para a pagina de login */
    return (
        <Router>
            <CartProvider>
                <Switch>
                    <Route exact path={'/'}>
                        <HomePage />
                    </Route>
                    <Route path={'/login'}>
                        <LoginUser />
                    </Route>
                    <Route path={'/carrinho'} >
                        <PageCarrinho />
                    </Route>
                    <Route path={'/perfil/:id'}  search="?:id">
                        <Private><Perfil /></Private>
                    </Route>
         
                    <Route path={'/product/:id'}>
                        <PageProduto />
                    </Route>
                    <Route path={'/cadastro'}>
                        <Cadastro />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
            </CartProvider>
        </Router>
    )
}

export default AppRoutes