import React from 'react'
import {Switch, Route} from 'react-router-dom'
//import PrivateRoute from './components/AutenticaRota/privateRoute'

// Páginas
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import PrivateRoute from './components/AutenticaRota/privateRoute'

export const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute path='/' component={Home} exact />
            <Route path='/login' component={Login} />
        </Switch>
    )  
}

export default Roteamento