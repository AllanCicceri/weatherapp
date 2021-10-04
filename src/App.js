import './App.css';
import Logo from './assets/imgs/logo.png'
import Main from './components/Main';
import Input from './components/Input';
import { useState, useEffect } from 'react';
import {getWeather} from './Api/Api'
import {StyledBackground} from './components/styles/Background.styled'

function App() {
  const [city, setCity] = useState(null)

  useEffect(() => {
    document.title = 'WeatherApp'
  }, [])

  const getCityWeather = async id => {
    const selectedCity = await getWeather(id)
    setCity({...selectedCity})
  }

  let cityMainId = ''
  if(city !== null){ 
    cityMainId = city.list[0].weather[0].id.toString().charAt(0)
    
    switch (cityMainId) {
      case '2':
      case '3':
      case '5':
        cityMainId = 'rain'
        break;
    
      case '8':
        cityMainId = 'clouds'
        break;

      default:
        cityMainId = 'initial'
        break;
    }
  }

  let imgUrl = process.env.PUBLIC_URL
  imgUrl += (cityMainId !== '')?'/'+cityMainId+'.webp':'/initial.webp'

  return (
    <StyledBackground imgUrl={imgUrl}>
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

    </StyledBackground>
  );
}

export default App;
