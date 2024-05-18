// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import MainList from './components/header/main/main.js';
import { dataForList, dataForButtons } from './content/mainData.js';
import Button from  './components/button/button.js';
import './components/header/main/main.css';
import { useState } from 'react';
import myImage from './Fon1.jpg';
function App() {
  const [contentFromButton, setNewContent] = useState('About us');

  //let contentFromButton = 'About us';
  const handleClick = (prop) => {
    console.log(prop);
    setNewContent(prop);
  } 
  return (
    <div className="App">
      <div className='img-container'>
      <img src={myImage} className='img-custom' alt='Fon1' />
      </div>
     <Header/>
     <main> 
      <section>
        <dl>
        <div  class='text-white'>
          {dataForList.map((item) => <MainList {...item} />)} //Как ?
          </div>
        </dl>
      </section>
     <section>
     <body> 
    </body>
        <h1> All buttons </h1>
        <Button onClick={() => handleClick('prop1')}>О нас</Button>
        <Button onClick={() => handleClick('prop2')}>Услуги</Button>
        <Button onClick={() => handleClick('prop3')}>Личный кабинет</Button>
        <Button onClick={() => handleClick('prop4')}>Контакты</Button>
        <p> {dataForButtons[contentFromButton]}</p>
        </section>
        </main>
       
    </div>
  );
}

export default App;
