import React, {useState} from 'react';

export const SegundoCompoente = () => {
  
    //let primerNombre = "Geomar";

    const [primerNombre, setNombre] = useState('Geomarcito')

    const cambiarNombre = ((nuevoNombre) => {
        setNombre(nuevoNombre)
    })
   
    
    return (
    <div>

    <h1> Hola clase </h1>
        <p> hola mi nombre es: <strong className={primerNombre.length >= 4 ? 'verde' : 'rojo'}> </strong>  {primerNombre} </p>
        
    <input type= "text" onChange={e=> cambiarNombre(e.target.value)} placeholder = "Cambia el nombre" />
    <button onClick = {e => cambiarNombre('Victor Robles')}>
    cambiar Nombre
    </button>
    
    </div>
  )
}

export default SegundoCompoente
