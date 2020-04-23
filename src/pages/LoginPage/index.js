import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {
    render() {
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage_title">Seja bem vindo!</h2>
                            <form className="loginPage_form" action="/">
                                <div className="loginPage_inputWrap">
                                    <label className="loginPage_label" htmlFor="login">Login</label> 
                                    <input className="loginPage_input" type="text" id="login" name="login"/>
                                </div>
                                <div className="loginPage_inputWrap">
                                    <label className="loginPage_label" htmlFor="senha">Senha</label> 
                                    <input className="loginPage_input" type="password" id="senha" name="senha"/>
                                </div>
                                {/* <div className="loginPage_errorBox">
                                    Mensagem de erro!
                                </div> */}
                                <div className="loginPage_inputWrap">
                                    <button className="loginPage_btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage