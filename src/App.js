import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './Componentes/Header/indexH';
import { ListaProductos } from './Componentes/Productos/indexP';
import 'boxicons';
import {BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./Componentes/Paginas";

function App() {

  return (
    <div className="App">
      <Router>
      <Header/>


      </Router>
    </div>
  );
}

export default App;
