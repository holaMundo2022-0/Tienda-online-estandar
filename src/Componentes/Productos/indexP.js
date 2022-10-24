import React, { useContext } from 'react'
import { DataContext } from '../../context/Dataprovider';
import { ProductoItem } from './ProductoItem';


export const ListaProductos = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos

    console.log(productos)


    return (
        <>
            <h1 className='title'> PRODUCTOS </h1>
            <div className='Productos'>
        
            {
                productos.map(producto => (
                    <ProductoItem  
                    key={producto.id } 
                    id = {producto.id}
                    title = {producto.title}
                    price = {producto.price}
                    categoria = {producto.categoria}
                    stock = {producto.stock}
                    image ={producto.image}
                    />
                ))
            }    
            </div>
        </>

    )
}
