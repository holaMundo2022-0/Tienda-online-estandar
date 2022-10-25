import React, {useContext} from 'react'
import helloWorld from "../../images/helloWorld.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContext} from "../../context/Dataprovider";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toogleMenu = () => {
    setMenu(!menu)
}
  
  return (
    <header>

      <Link to="/">
        <div className='logo'>
          <img src={helloWorld} alt="logo" width="150" />
        </div>
      </Link>

      <ul>
        <li>
          <Link to='/Productos'> PRODUCTOS  </Link>
        </li>
      </ul>
      
        <div className='cart' onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className='item__total'>{carrito.length}</span>
        </div>
      
    </header>
  )
}

