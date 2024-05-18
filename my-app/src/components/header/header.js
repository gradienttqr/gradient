import './header-styles.css'
import logo from'../../logo.svg'
import {useState} from 'react';
export default () => {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000);
 
 
  return (
    <div className='App'>
      <div className="white-strip"></div>
    <header>
          <img src={logo} alt='logo'></img>
          <nav>
            <ul>
              <li> <a href='#'>Modelle</a></li>
              <li> <a href='#'>Elrr</a></li>
              <li> <a href='#'>Wawr</a></li>
            </ul>
          </nav>
          <span> Time now: {(now).toLocaleTimeString()}</span>
          </header>
        </div>
    )
  }
