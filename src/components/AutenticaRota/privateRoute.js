import React from 'react'
import {Route, Redirect} from 'react-router-dom'

class PrivateRoute extends React.Component {
    render() {
        const Component = this.props.component
        const props = this.props
        if (estaAutenticado()) {
            return ( <Route render={ () => <Component {...props }/>}/> )
        } else {
            return ( <Redirect to="/login"/> )
        }
    }
}

//Código de aurenticação
function estaAutenticado() {
    if(localStorage.getItem('TOKEN')) {
        console.log("TOKEN" + localStorage.getItem('TOKEN'))
        return true
    } else {
        console.log("Token")
        console.log("TOKEN" + localStorage.getItem('TOKEN'))
        return false
    }
}

export default PrivateRoute