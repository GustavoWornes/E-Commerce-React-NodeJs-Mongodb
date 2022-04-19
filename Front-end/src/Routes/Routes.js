import React, { useContext } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,useParams
} from "react-router-dom"
import HomePage from '../pages/Home'
import LoginUser from '../pages/Login'
import PageProduto from '../pages/PageProduto'
import PageCarrinho from '../pages/Carrinho'
import CadastroUsuario from '../pages/CadastroUsuario'
import Page404 from "../pages/404/Page404";
import { utils } from "../utils"
import Perfil from "../pages/Perfil"
import { CartProvider, CartContext } from "../contexts/auth"


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
                        <Private><PageCarrinho /></Private>
                    </Route>
                    <Route path={'/perfil'}>
                        <Private><Perfil /></Private>
                    </Route>
                    <Route path={'/product/:id'}>
                        <PageProduto />
                    </Route>
                    <Route path={'/cadastro'}>
                        <CadastroUsuario />
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