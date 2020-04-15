import React, { Component } from 'react'
import './dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className={`dashboard dashboard_${this.props.posicao}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Dashboard