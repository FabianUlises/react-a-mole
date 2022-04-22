import React, { useEffect, useState } from 'react';
import moleImg  from './mole.png';

function Mole(props) {
    useEffect(()=>{
        let randomSeconds = Math.ceil(Math.random()*5000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randomSeconds)
        return ()=>{clearTimeout(timer)}
    })

    return(
        <img
            style={{'width': '30vw'}}
            src={moleImg}
            alt='mole'
            onClick={props.moleBopper}
        />
    )
}

export default Mole;