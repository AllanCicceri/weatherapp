import './App.css';
import Logo from './assets/imgs/logo.png'
import Main from './components/Main';
import Input from './components/Input';
import { useState } from 'react';
import {getWeather} from './Api/Api'

function App() {
  const [city, setCity] = useState(null)

  const getCityWeather = async id => {
    const selectedCity = await getWeather(id)
    setCity({...selectedCity})
  }

  return (
    
    <div className="App">
          <header className="header">
            <img src={Logo} alt="alce dev logo" className="logo" />
          </header>
            
          <Input getCityId={id  => { getCityWeather(id) }}/>

          <Main selectedCity={city}/>

          <footer>Powered by Open Weather API</footer>
    </div>
  );
}

export default App;
