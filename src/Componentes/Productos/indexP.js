import React from 'react'
import guanabana from "../../images/guanabana.jpg";
export const ListaProductos = () => {
    return (
        <>
            <h1 className='title'> PRODUCTOS </h1>
            <div className='productos'>
                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={guanabana} alt="prod" width="150" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Title </h1>
                        <p> Categoría </p>
                        <p className='price'>$320</p>
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


                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={guanabana} alt="prod" width="150" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Title </h1>
                        <p> Categoría </p>
                        <p className='price'>$320</p>
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



                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={guanabana} alt="prod" width="150" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Title </h1>
                        <p> Categoría </p>
                        <p className='price'>$320</p>
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


                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={guanabana} alt="prod" width="150" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Title </h1>
                        <p> Categoría </p>
                        <p className='price'>$320</p>
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


                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={guanabana} alt="prod" width="150" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Title </h1>
                        <p> Categoría </p>
                        <p className='price'>$320</p>
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
                
            </div>
        </>

    )
}
