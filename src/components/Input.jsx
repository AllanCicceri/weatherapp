import './Input.css'
import React, { useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import cities from '../Api/cities.json'

export default ({getCityId}) => {
    const [cityInput, setCityInput] = useState('')
    const [citiesList, setCitiesList] = useState(null)

    const handleCities = e => {
      setCityInput(e.target.value)

      const results = cities.filter(s => s.name.indexOf(cityInput) !== -1)
      
      const tenFirstResults = (results.length > 10) ? results.slice(0, 10) : results

      setCitiesList(tenFirstResults)

      citiesList!== null && suggestCities(e)
    }


    const suggestCities = e => {
      const val = e.target.value
      if(!val) return

      const sugestionList = document.createElement('div')
      sugestionList.setAttribute('id', 'sugestionList')
      sugestionList.setAttribute('class', 'autocomplete-items')

      e.target.parentNode.appendChild(sugestionList)

      citiesList.forEach((item, i) => {
        const sugestionItem = document.createElement('div')
        sugestionItem.innerHTML = `${item.name}, ${item.country}`
        sugestionItem.onclick = () =>  {
          getCityId(item.id)
          closeSugestionList(e)
        }
        
        sugestionList.appendChild(sugestionItem)
      })
    }

    const closeSugestionList = e => {
      const elements = document.getElementById("searchBar").querySelectorAll(".autocomplete-items")
      
      elements.forEach((item,i) => {
        item.parentNode.removeChild(item)
      })

    }
    
    return (
        <form autoComplete="off" className="searchContainer">
            <div className="searchBar" id="searchBar">
              <BiIcons.BiSearch size="30px" style={{width:"10%"}}/>
              <input id="inputCitySelector"  value={cityInput} onChange={handleCities}></input> 
            </div>
        </form>
    )
}