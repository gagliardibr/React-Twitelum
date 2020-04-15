import React, { Component } from 'react'
import './trendsArea.css'

class TrendsArea extends Component {
    render() {
        return (
            <div className="trendsArea">
                <h2 className="trendsArea_titulo widget_titulo">Trends Brasil</h2>
                <ol className="trendsArea_lista">
                    <li><a href="/">#bagulhos</a></li>
                    <li><a href="/">#bagulheiros</a></li>
                </ol>
            </div>
        )
    }
}

export default TrendsArea