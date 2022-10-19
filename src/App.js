import logo from './logo.svg';
import './App.css';
import SegundoCompoente from './Componentes/SegundoCompoente';
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';

  let nombre1 = 'JuanchoPolito'
  let Productos = ['Tomate', 'aguacate', 'panela']

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

    <SegundoCompoente/>
    <p> Mi nombre es: {nombre1} </p>

    <h2> Productos: </h2>
    <ul>
        {
          Productos.map((producto, indice) => {
            return (<li key = {indice}>
                {producto}
            </li>);
          })
           

        }
    </ul>

    </header>
    </div>
  );
}

export default App;
