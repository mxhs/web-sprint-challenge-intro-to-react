import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CharacterContainer from './components/Character.js'
import styled from 'styled-components'

const StyledHeader = styled.div`
  h1{
    background-color: rgba(255, 255, 255, .8);
    background-blend-mode: overlay;
    width: 35%;
    padding: 1.5% 1%;
    margin: 2% auto;
    border-radius: 8px;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])

  useEffect(() =>{
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setCharacters(res.data.results)
      console.log("app axios", res.data.results)
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
        <h1 className="Header">Rick and Morty Characters</h1>
      </StyledHeader>
      {
        characters.map(char =>{
          return <CharacterContainer key={char.id} info={char} />
        })
      }
    </div>
  );
}

export default App;


// const characterArr = Object.values(res.data.results)
      
//       let infoByCharacter = characterArr.map(item =>{
//         return Object.values(item)
//       })
//       console.log('me', infoByCharacter)