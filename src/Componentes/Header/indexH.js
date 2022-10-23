import React from 'react'
import helloWorld from "../../images/helloWorld.jpg";
export const Header = () => {
  return (
    <header>

    <a href= "">
        <div className='logo'>           
            <img src={helloWorld} alt="logo" width="150"/>
        </div>
    </a>

    <ul>
        <li>
        <a href='#'> INICIO  </a>
        <a href='#'> PRODUCTOS  </a>
      </li>
    </ul>

    <div className='cart'>
<box-icon name= "cart"></box-icon>
<span className='item__total'>0</span>
    </div>

    </header>
  )
}

