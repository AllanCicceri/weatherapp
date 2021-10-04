import './Input.css'
import React, {useRef} from 'react'
import * as BiIcons from 'react-icons/bi'
import cities from '../Api/cities.json'
import Util from '../Api/Util'

const Input = ({getCityId}) => {
    const inputElement = useRef(null)

    const handleCities = () => {
      
      const results = [] 
      let count = 0
      
      Array.from(cities).forEach(item => {
        if(count < 10)
           
          if(item.name.toUpperCase().includes(inputElement.current.value.toUpperCase())){
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
        sugestionItem.setAttribute('class', 'suggestion-item')

        const innerHtml = strongfySuggestion(item)
        sugestionItem.innerHTML = innerHtml
        
        sugestionItem.onclick = () =>  {
          getCityId(item.id)
          inputElement.current.value = item.name
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
    
    const strongfySuggestion = (item) => {
      const inputValue = inputElement.current.value

      const startPos = item.name.toUpperCase().indexOf(inputValue.toUpperCase())
      const endPos = startPos + inputValue.length
      
      const leftPiece = Util.Left(item.name, startPos)
      
      let middlePiece = '' 
      if(leftPiece.length === 0 || item.name.charAt(startPos -1).trim().length === 0)
        middlePiece = Util.capitalizeFirstLetter(inputValue)
      else
        middlePiece = inputValue
      

      const rightPiece = Util.Right(item.name, endPos)
      
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

export default Input