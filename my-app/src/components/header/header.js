import './header-styles.css'
import logo from'../../logo1.png'
import {useState} from 'react';
export default () => {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000);
 
 
  return (
    <div className='App'>
      <div className="white-strip"></div>
    <header>
          <img src={logo} alt='logo1.png'></img>
          
          <nav>
            <ul>
              <li> <a href='#'>gradient studio</a></li>
              
            </ul>
          </nav>
          <span> Time now: {(now).toLocaleTimeString()}</span>
          </header>
        </div>
    )
  }
