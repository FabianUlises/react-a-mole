import React,{ useEffect} from 'react'
import hillImg from "./molehill.png"


function EmptySlot(props) {
    useEffect(()=> {
        let randSeconds = Math.ceil(Math.random()*5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    
    return(
        <img 
            style={{'width': '30vw'}}
            src={hillImg} 
            alt="molehill"
        />
    )
}

export default EmptySlot 