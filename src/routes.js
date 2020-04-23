import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Páginas
import Home from './pages/HomePage'
import Login from './pages/LoginPage'

const Roteamento = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default Roteamento