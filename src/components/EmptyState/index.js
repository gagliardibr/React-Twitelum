import React, { Component } from 'react'
import './emptyState.css'

class EmptyState extends Component {
    render() {
        return (

            <article className="empatyState">
                <div className="empatyState_cabecalho">
                    <p className="empatyState_title"><strong>Você ainda não Tweetou!</strong></p>
                </div>
                <p className="empatyState_conteudo"> Quando você enviar Tweets, eles serão mostrados aqui. </p>
                <footer className="empatyState_footer"></footer>
            </article>
        )
    }
}

export default EmptyState