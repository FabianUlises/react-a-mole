import React, {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer (props){
    let [displayMole, setDisplayMole] = useState(false)

    const moleBopper = () => {
        if(displayMole) {
            props.setScore(props.score + 1)
            setDisplayMole(false);
        }
    }

    const moleOrHill = () => {
        return (
            // console.log(displayMole)
            !displayMole? <EmptySlot setDisplayMole={setDisplayMole} onClickk={moleBopper}/> : <Mole setDisplayMole={setDisplayMole} onClick={moleBopper}/> 
        )
    }

    return(
        <div  className="moleBurrow" onClick={moleBopper}>
            {moleOrHill()}
        </div>
    )
}

export default MoleContainer