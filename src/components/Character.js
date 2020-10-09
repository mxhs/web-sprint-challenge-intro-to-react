import React from 'react'
import styled from 'styled-components'

// Write your Character component here
export default function Characters (charData){
    
    return(
        <div className='characterDiv'>
            <img src={charData.url}/>
            <h1>{charData.name}</h1>
        </div>
    )
}