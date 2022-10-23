import React from 'react'
import { Switch, Router } from "react-router-dom";
import { Inicio } from './Inicio/indexI';
import { ListaProductos } from './Productos/indexP';

export const Paginas = () => {
    return (
        <div>
            <Router path='/' exact component={Inicio} />
            <Router path='/Productos' exact component={ListaProductos} />
        </div>
    )
}
