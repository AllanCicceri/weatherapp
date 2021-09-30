import './Input.css'
import React, { useEffect, useRef, useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import cities from '../Api/cities.json'

export default ({getCityId}) => {
    const [cityInput, setCityInput] = useState('')
    const [citiesList, setCitiesList] = useState([])
    const inputElement = useRef(null)

    useEffect(() => {
      !!citiesList.length && handleCities()
    }, [citiesList])


    const handleCities = () => {  
      console.log('oi')
      const results = [] 
      let count = 0

      Array.from(cities).forEach(item => {
        if(count < 20)
          if(item.name.includes(cityInput)){
            results.push(item)
            count++
          }
      })

      console.log(results)
      setCitiesList(results)
      citiesList!== null && suggestCities()
    }


    const suggestCities = () => {
      const sugestionList = document.createElement('div')
      sugestionList.setAttribute('id', 'sugestionList')
      sugestionList.setAttribute('class', 'autocomplete-items')

      inputElement.current.parentNode.appendChild(sugestionList)
      
      citiesList.forEach((item, i) => {
        const sugestionItem = document.createElement('div')
        sugestionItem.innerHTML = `${item.name}, ${item.country}`
        sugestionItem.onclick = () =>  {
          getCityId(item.id)
          closeSugestionList()
        }
        
        sugestionList.appendChild(sugestionItem)
      })
    }

    const closeSugestionList = () => {
      const elements = document.getElementById("searchBar").querySelectorAll(".autocomplete-items")
      
      elements.forEach((item,i) => {
        item.parentNode.removeChild(item)
      })

    }
    
    return (
        <form autoComplete="off" className="searchContainer">
            <div className="searchBar" id="searchBar">
              <BiIcons.BiSearch size="30px" style={{width:"10%"}}/>
              <input ref={inputElement} id="inputCitySelector"  value={cityInput} onChange={e => setCityInput(e.target.value)}></input> 
            </div>
        </form>
    )
}