// Write your Character component here
import react, {useEffect, useState} from "react";
import styled from "styled-components";


const Birth = styled.p`
    padding: .7% 0% 0% 0%;
    width:15%;
    background-color: rgba(69, 69, 69,.7);
    color:black;
    font-size: 1.3rem;
`
const Name = styled.h1`
    width:70%;
    background: rgba(69, 69, 69,.7);
    color:rgba(36, 36, 36,1);
    
`
const BigDivvy = styled.div`
    
    width: 100%;
    display:flex;
    flex-direction: column;
    align-content: space-evenly;
    
`
const LilDivvy= styled.div`

    align-self: center;
    width: 70%;
    background: linear-gradient(39deg, rgba(205,201,152,1) 6%, rgba(215,212,161,1) 30%, rgba(96,93,49,1) 70%, rgba(126,126,88,1) 100%);
    display:flex;
    justify-content: space-evenly;
    outline: .5rem solid rgba(69, 69, 69,.7);
    margin: 2% 0% 2% 0%;
`
const Info =styled.button`
    
    background-color:rgba(69, 69, 69,.7);
    align-self: center;
    width: 6%;
    font-size: 3rem;
`   
const Pop =styled.div`
    width:100%;
    background-color: black;
    height: 500px;
`

const character =(props)=>{  



    const {names} = props
    console.log(names)
    return(
        <BigDivvy key= 'big'>
            {names.map(e => ( 
                <LilDivvy key={e.created}>
                    <Info key={e.edited}>&#x2b07;</Info>
                    <Name key={e.mass}>{e.name}</Name>
                    <Birth>{`DOB: ${e.birth_year}`}</Birth>
                </LilDivvy>))}
        </BigDivvy>
    )

}




export default character