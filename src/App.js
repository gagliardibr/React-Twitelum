import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho';
import NavMenu from './components/NavMenu'
import './App.css';

class App extends Component {
  render() {
    return (
        <Cabecalho>
          <NavMenu usuario="@mariosouto" />
        </Cabecalho>
    );
  }
}

export default App;
