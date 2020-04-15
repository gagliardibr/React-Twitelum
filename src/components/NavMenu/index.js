import React, { Component } from "react"
import './navMenu.css'

class NavMenu extends Component {
    render() {
        return (
            <nav className='navMenu'>
                <ul className='navMenu_lista'>
                    <li className='navMenu_item'>
                        <a className='navMenu_link'>
                            Bem Vindo(a): <br />
                            <strong>{this.props.usuario}</strong>
                        </a>
                    </li>
                    <li className='navMenu_item'>
                        <a className='navMenu_link' href=''>Página Inicial</a>
                    </li>
                    <li className='navMenu_item'>
                        <a className='navMenu_link' href=''>Hashtag</a>
                    </li>
                    <li className='navMenu_item'>
                        <a className='navMenu_link' href=''>Logout</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavMenu
