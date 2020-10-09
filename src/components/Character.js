import React from 'react'
import styled from 'styled-components'


const StyledCharBox = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
    color: #fff;
    display: flex;
    justify-content: center;
    margin: 2% auto;
    font-family: 'Roboto' ;
    font-weight: 700;
    *{
        /* border: 1px solid lightgoldenrodyellow; */
    }

    h2, p, h3{
        margin: 0;
        padding: 0;
    }

    

    .charCard{
        margin: 2% auto;
    }

    img{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 300px;
        height: 100%;
        margin: 0px;
        opacity: 1;
        transition: opacity 0.5s ease 0s;
        object-position: center center;
        object-fit: cover;
    }


    p, h3{
        font-weight: 400;
        /* margin: 0; */
        font-size: 1.2rem;
    }

    section{
        display: flex;
        flex-direction: column;
        text-align: left; 
        justify-content: baseline;
        width: 100%;
        margin-bottom: 8%;
    }

    h3{
        color: #9e9e9e;
        font-size: .8rem;
    }

    .charInfo{
        background-color: rgba(60, 62, 68, .95);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: .75rem;
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        align-items: baseline;
        width: 32%;
    }
`

// Write your Character component here
export default function Characters (prop){
    const {info} = prop
    return(
        <StyledCharBox className='charCard'>
            <img src={info.image} alt=''/>
            <div className='charInfo'>
                <section>
                    <h2>{info.name}</h2>
                    <p>• {info.status} - {info.species}</p>
                </section>
                <section>
                    <h3>Last Known Location:</h3>
                    <p>{info.location.name}</p>
                </section>
                <section>
                    <h3>First Seen In:</h3>
                    <p>{info.episode[0]}</p>
                </section>
            </div>
        </StyledCharBox>
    )
}