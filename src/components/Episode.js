import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Episode = () => {
    const [episode, setEpisode] = useState([])

    useEffect(() =>{
        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
            console.log("here", res)
            setEpisode(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div>

        </div>
    )
}

export default Episode



    
