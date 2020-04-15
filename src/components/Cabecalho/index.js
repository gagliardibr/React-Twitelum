import React, { Component } from 'react'
import './cabecalho.css'

class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho">
                <div className="cabecalho_container container">
                    <h1 className="cabecalho_logo">
                        <a href="">Twitelum</a>
                    </h1>
                    { this.props.children}
                </div>
            </header>
        )
    }
}

export default Cabecalho