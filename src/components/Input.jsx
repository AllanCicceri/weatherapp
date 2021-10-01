import './Input.css'
import React, { useEffect, useRef, useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import cities from '../Api/cities.json'
import '../Api/Util'

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

      if(!inputElement.current.value)
        return
      
      const sugestionList = document.createElement('div')
      sugestionList.setAttribute('id', 'sugestionList')
      sugestionList.setAttribute('class', 'autocomplete-items')

      inputElement.current.parentNode.appendChild(sugestionList)
      
      citiesList.forEach((item) => {
        const sugestionItem = document.createElement('div')

        const innerHtml = stronglifySuggestion(item)
        sugestionItem.innerHTML = innerHtml

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

    const stronglifySuggestion = (item) => {
      const startPos = item.name.indexOf(inputElement.current.value)
      const endPos = inputElement.current.value.length
      const leftPiece = item.name.Left(item.name, startPos)
      const middlePiece = inputElement.current.value
      const rightPiece = item.name.Right(item.name, endPos)

        const newInnerHtml = `${leftPiece}<strong>${middlePiece}</strong>${rightPiece}, ${item.country}`
      return newInnerHtml
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