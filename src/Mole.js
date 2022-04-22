import React, {useEffect} from 'react'
import moleImg from './mole.png'

function Mole(props) {
    useEffect( () => {
        let randSeconds = Math.ceil(Math.random()*5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return(
        <img 
            style={{'width': '30vw'}}
            src={moleImg} 
            alt="mole"
            onClick={props.moleBopper}
        />
    )
}

export default Mole