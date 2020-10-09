import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CharacterListContainer from './components/Character.js'
import styled from 'styled-components'

const StyledHeader = styled.div`
  h1{
    background-color: rgba(255, 255, 255, .8);
    background-blend-mode: overlay;
    width: 18%;
    padding: 1% 0;
    margin: 2% auto;
    border-radius: 8px;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterData, setCharacterData] = useState({})

  useEffect(() =>{
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      const characterArr = Object.values(res.data.results)
      
      let infoByCharacter = characterArr.map(item =>{
        return Object.values(item)
      })
      console.log('me', infoByCharacter)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledHeader>
        <h1 className="Header">Characters</h1>
      </StyledHeader>
      <CharacterListContainer charData={characterData}/>
    </div>
  );
}

export default App;
