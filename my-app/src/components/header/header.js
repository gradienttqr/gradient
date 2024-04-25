import './header-styles.css'
import logo from'../../logo.svg'
// import {useState} from 'react';
export default () => {
  return (
  <header>
        <img src={logo} alt='logo'></img>
        <nav>
          <ul>
            <li> <a href='#'>Item 1 </a></li>
            <li> <a href='#'>Item 2 </a></li>
            <li> <a href='#'>Item 3 </a></li>
          </ul>
        </nav>
        <span> Time now: {(new Date()).toLocaleTimeString()}</span>
        </header>
  )
}
