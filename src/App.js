import './App.css';
import Logo from './assets/imgs/logo.png'
import Main from './components/Main';
import Input from './components/Input';
import { useState, useEffect } from 'react';
import {getWeather} from './Api/Api'

function App() {
  const [city, setCity] = useState(null)

  useEffect(() => {
    document.title = 'WeatherApp'
  }, [])

  const getCityWeather = async id => {
    const selectedCity = await getWeather(id)
    setCity({...selectedCity})
  }

  // if(city !== null){ todo: alterar background img
  //   const cityMain = city.list[0].weather[0].id
  // }

  return (
    <div className="styled">
      <div className="App">
            <header className="header">
              <img src={Logo} alt="alce dev logo" className="logo" />
            </header>
            <main className="main">
              <Input getCityId={id  => { getCityWeather(id) }}/>
              <Main selectedCity={city}/>
            </main>

            <footer>Powered by Open Weather API</footer>
      </div>

    </div>
  );
}

export default App;
