import React from 'react'
import guanabana from '../../images/guanabana.jpg';

export const ProductoItem = ({
    id,
    title,
    price,
    categoria,
    stock,
    image
}) => {

    return (
        <div className='producto'>
            <a href="#">
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
                <button className='btn'>
                    Añadir al carrito
                </button>
                <div>
                    <a href='#' className='btn'>vista</a>
                </div>
            </div>
        </div>
    )
}

