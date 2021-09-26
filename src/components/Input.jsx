import './Input.css'
import React, { useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import cities from '../Api/cities.json'

export default ({id, setId}) => {
    const [cityInput, setCityInput] = useState('')
    const [citiesList, setCitiesList] = useState(null)

    const handleCities = e => {
      setCityInput(e.target.value)

      const results = cities.filter(s => s.name.indexOf(cityInput) !== -1)
      
      const tenFirstResults = (results.length > 10) ? results.slice(0, 10) : results

      setCitiesList(tenFirstResults)
    }


    const getCityId = e => {
      if(e.keyCode == 13){
        const Value = document.querySelector('#inputCitySelector').value;

        if(!Value) return;

        // const myText = document.querySelector('option[value=' + Value + ']');
        const myText = document.querySelector(`option[value='${Value}']`)
        console.log(myText)

      }
    }


    function renderCities(){
      return(
              <datalist id="cities" className="citiesDataList">
                {citiesList.map((item, key) => (
                  <option className="citiesOptionItem" key={key} value={item.name}  myprop={item.id} >
                    {`${item.name}, ${item.country}`}</option>
                ))
                }
              </datalist>
      )
    }

    
    return (
        <div className="searchContainer">
            <div className="searchBar">
              <BiIcons.BiSearch size="30px" style={{width:"10%"}}/>
              <input id="inputCitySelector" list="cities" value={cityInput} onKeyUp={getCityId} onChange={handleCities}></input> 
            </div>
          {citiesList !== null && renderCities()}
        </div>
    )
}