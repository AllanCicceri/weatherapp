import './Input.css'
import React, { useEffect, useRef, useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import cities from '../Api/cities.json'

export default ({getCityId}) => {
    const inputElement = useRef(null)

    const handleCities = () => {
      
      const results = [] 
      let count = 0
      Array.from(cities).forEach(item => {
        if(count < 10)
          if(item.name.includes(inputElement.current.value)){
            results.push(item)
            count++
          }
      })
      
      suggestCities(results)
    }


    const suggestCities = (citiesList) => {
      closeSugestionList()
      
      const sugestionList = document.createElement('div')
      sugestionList.setAttribute('id', 'sugestionList')
      sugestionList.setAttribute('class', 'autocomplete-items')

      inputElement.current.parentNode.appendChild(sugestionList)
      
      citiesList.forEach((item) => {
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
      
      elements.forEach((item) => {
        item.parentNode.removeChild(item)
      })

    }
    
    return (
        <form autoComplete="off" className="searchContainer">
            <div className="searchBar" id="searchBar">
              <BiIcons.BiSearch size="30px" style={{width:"10%"}}/>
              <input ref={inputElement} id="inputCitySelector"  onChange={handleCities}></input> 
            </div>
        </form>
    )
}