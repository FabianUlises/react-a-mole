import { useEffect } from 'react';
import MoleHill from '../molehill.png';

const EmptySlot = (props) => {
  // Useeffect to toggle theMole state from props
  useEffect(() => {
    // Generating random number
    let randSeconds = Math.ceil(Math.random() * 5000);
    // Setting timer for toggle
    let timer = setTimeout(() => {
        props.toggle(true)
    }, randSeconds)
    // Resetting timer
    return () => clearTimeout(timer)
  });
  return (
    <div>
      <img style={{'width': '100%'}} src={MoleHill} alt='empty slot, mole hill' />
    </div>
  )
};
export default EmptySlot;