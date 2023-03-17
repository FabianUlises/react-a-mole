import React, { useState } from 'react';
// Components
import Mole from './Mole';
import EmptySlot from './EmptySlot';
const MoleContainer = (props) => {
  // State for mole
  let [theMole, setTheMole] = useState(false);
  // Function to pop mole and update score
  const handleClick = (e) => {
    props.setScore(props.score + 1);
    setTheMole(false);
  };
  // Variable to display mole depending on mole state
  let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />
  return (
    <div className='mole-container'>
      {displayMole}
    </div>
  )
};
export default MoleContainer;