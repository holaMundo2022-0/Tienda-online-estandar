import React, {useContext} from 'react'
import guanabana from '../../images/guanabana.jpg';
import {Link} from "react-router-dom";
import { DataContext } from '../../context/Dataprovider';
import Data from '../../Data';


export const ProductoItem = ({
    id,
    title,
    price,
    categoria,
    stock,
    image
}) => {

    const value = useContext(DataContext);
    const addCarrito =value.addCarrito;
    return (
        <div className='producto'>
            <a href="#">
                <br/>
                <div className='producto__img'>
                    <img src={image} alt={title} width="150" />
                </div>
            </a>
            <div className='producto__footer'>
                <h1> {title} </h1>
                <p> {categoria} </p>
                <p className='price'>${price}</p>
            </div>
            <div className='buttom'>
                <button className='btn' onClick={() =>addCarrito(id)}> Añadir al carrito
                </button>
                <div>
                    <a href='#' className='btn'>vista</a>
                </div>
            </div>
        </div>
    )
}

