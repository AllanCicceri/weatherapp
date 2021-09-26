import './App.css';
import Logo from './assets/imgs/logo.png'
import Main from './components/Main';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [cityId, setCityId] = useState(null)
  
  

  // (cityId !== null && getCityInfo())

  return (
    
    <div className="App">
      <div className="background-img">
        <div className="background-blackLayer">
          <header className="header">
            <img src={Logo} alt="alce dev logo" className="logo" />
          </header>
            
          <Input setId={setCityId}/>
          
          <Main id={cityId}/>

          <footer>Powered by Open Weather API</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
