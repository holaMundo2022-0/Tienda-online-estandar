import React from 'react'
import helloWorld from "../../images/helloWorld.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


export const Header = () => {
  return (
    <header>

    <Link to= "/">
        <div className='logo'>           
            <img src={helloWorld} alt="logo" width="150"/>
        </div>
    </Link>

    <ul>
        <li>
        <Link to='/Productos'> PRODUCTOS  </Link>
      </li>
    </ul>

    <div className='cart'>
<box-icon name= "cart"></box-icon>
<span className='item__total'>0</span>
    </div>

    </header>
  )
}

