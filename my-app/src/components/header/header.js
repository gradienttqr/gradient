import './header-styles.css'
import logo from'../../logo.svg'
import {useState} from 'react';
export default () => {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000);
 
 
  return (
  <header>
        <img src={logo} alt='logo'></img>
        <nav>
          <ul>
            <li> <a href='#'> </a></li>
          </ul>
        </nav>
        <span> Time now: {(new Date()).toLocaleTimeString()}</span>
        </header>
  )
}
