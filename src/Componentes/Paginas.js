import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import { Inicio } from './Inicio/indexI';
import { ListaProductos } from './Productos/indexP';

export const Paginas = () => {
    return (
        <div className='Pag'>
        <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<ListaProductos />} />
        </Routes>
        </Router>
        </div>
    )   
}


/*     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<ListaProductos />} />
      </Routes>
    </Router>
    */


    
       /*
        <Router>
        <h1> Welcome to the jungle </h1>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Productos'element={<ListaProductos/>}/>
        </Routes>
        
        </Router>
        */