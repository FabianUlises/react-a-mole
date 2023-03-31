import { useEffect } from 'react';
import moleImg from '../mole.png';
const Mole = (props) => {
  // Useeffect to toggle theMole prop from props
  useEffect(() => {
    // Generating random number
    let randSeconds = Math.ceil(Math.random() * 4500);
    // Timer to toggle mole
    let timer = setTimeout(() => {
        props.toggle(false)
    }, randSeconds)
    // Resetting timer
    return () => clearTimeout(timer)
}, []);
  return (
    <div>
      <img style={{'width': '100%'}} src={moleImg} alt='mole' onClick={props.handleClick} className='mole-img'/>
    </div>
  )
};
export default Mole;