// import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header';
import MainList from './components/header/main/main.js';
import { dataForList } from './content/mainData.js'
import Button from  './components/button/button.js'
function App() {
  return (
    <div className="App">
     <Header/>
     <main> 
      <section>
        <dl>
          {dataForList.map((item) => <MainList {...item} />)}
        </dl>
      </section>
     <section>
        <h1> All buttons </h1>
        <Button/>
        </section>
        </main>
    </div>
  );
}

export default App;
