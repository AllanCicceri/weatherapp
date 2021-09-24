import './App.css';
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import Logo from './assets/imgs/logo.png'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="background-img">
        <div className="background-blackLayer">
          <header className="header">
            <img src={Logo} alt="alce dev logo" className="logo" />
          </header>
            
          <div className="searchContainer">
            <div className="searchBar">
              <BiIcons.BiSearch size="30px" style={{width:"10%"}}/>
              <input></input> 
            </div>
          </div>

          <Main />

          <footer>Powered by Open Weather API</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
