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
                            <form className="loginPage_form" action="/" onSubmit={this.fazerLogin}>
                                <div className="loginPage_inputWrap">
                                    <label className="loginPage_label" htmlFor="login">Login</label>
                                    <input ref={(inputLogin) => this.inputLogin = inputLogin} className="loginPage_input" type="text" id="login" name="login" />
                                </div>
                                <div className="loginPage_inputWrap">
                                    <label className="loginPage_label" htmlFor="senha">Senha</label>
                                    <input ref={(inputSenha) => this.inputSenha = inputSenha} className="loginPage_input" type="password" id="senha" name="senha" />
                                </div>
                                {this.state.errorMenssage && <div className="loginPage_errorBox"> {this.state.errorMenssage} </div>}
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

    constructor() {
        super();
        this.state = {
            errorMenssage: '',
        }
    }

    fazerLogin = (event) => {
        event.preventDefault()

        const dadosLogin = {
            login: this.inputLogin.value,
            senha: this.inputSenha.value
        }

        fetch('http://twitelum-api.herokuapp.com/login', {
            method: 'Post',
            body: JSON.stringify(dadosLogin)
        })
            .then((response) => {
                if (!response.ok)
                    throw response;
                return response.json()
            })
            .then((responseEmJSON) => {
                localStorage.setItem('TOKEN', responseEmJSON.token)
                this.props.history.push('/')
            })
            .catch((responseError) => {
                responseError.json().then((response) => {
                    const errorMenssage = response.message
                    if (errorMenssage){
                        this.setState({
                            errorMenssage: errorMenssage
                        })
                    }
                    console.log(errorMenssage)
                })
            })
    }
}


export default LoginPage