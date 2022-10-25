import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './Componentes/Header/indexH';
import { ListaProductos } from './Componentes/Productos/indexP';
import 'boxicons';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Paginas} from "./Componentes/Paginas";
import { Inicio } from './Componentes/Inicio/indexI';
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from './Componentes/Carrito/indexC';

function App() {
  return (
    <DataProvider>
    <div className='App'>
      
      <Router>
      <Header/>  
      <Carrito/>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<ListaProductos />} />
          
        </Routes>
        
      </Router>

    </div>
    </DataProvider>
    );
}

export default App;
