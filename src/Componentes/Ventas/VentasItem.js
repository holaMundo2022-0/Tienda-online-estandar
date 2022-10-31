import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import { DataContext } from '../../context/Dataprovider';


export const VentasItem = ({
    id,
    compra,
    price,
    stock,
    Comprador,
    Fecha,
    Total
}) => {

    const value = useContext(DataContext);
    //const addCarrito =value.addCarrito;
    return (
        <div className='producto'>
            <div className='producto__footer'>
                <h1> {Comprador} </h1>
                <p> {compra} </p>
                <p> {Fecha} </p>
                <p> {Total} </p>
                <p className='price'>${Total}</p>

            </div>
        </div>
    )
}