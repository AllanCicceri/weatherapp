import './App.css';
import * as BiIcons from 'react-icons/bi'
import * as FcIcons from 'react-icons/fc'
import Logo from './assets/imgs/logo.png'

function App() {
  return (
    <div className="App">
      <div className="background-img">
        <div className="background-blackLayer">
          <div className="header">
            <img src={Logo} alt="alce dev logo" className="logo" />
            
            <div className="searchBar">
              <BiIcons.BiSearch size="30px" style={{width:"10%"}}/>
              <input></input> 
            </div>

            <FcIcons.FcAbout size="35px" style={{marginTop:"15px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
