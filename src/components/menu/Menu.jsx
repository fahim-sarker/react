import React from 'react'
import "./menu.css"

const Menu = () => {
  return (
    <div>
      <nav>  
        <div className='logo'>
            <h2><i>react</i></h2>
        </div>
        <div className='menu'>
            <ul>
                <li><a className='item' href="#">home</a></li>
                <li><a className='item' href="#">about</a></li>
                <li><a className='item' href="#">service</a></li>
                <li><a className='item' href="#">portfolio</a></li>
                <li><a className='item' href="#">team</a></li>
                <li><a className='item' href="#">contact</a></li>
                <li><a className='btn' href="#">get started</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu
