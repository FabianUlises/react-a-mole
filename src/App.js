import { useState } from 'react';
import './App.css';
import './index.css';
// Components
import MoleContainer from './components/MoleContainer';
function App() {
  // Score state
  let [score,setScore] = useState(0)
  // Funtion to create mole hill depending on number given
  const createMoleHill = (n) => {
    // Start with an empty array for hills
    let hills = [];
    // Loop through number given to create MoleContainer component and push to hills array
    for(let i = 0; i < n; i++) {
      // Adding components with props created to hills array
      hills.push(
        <MoleContainer
        key={i}
        setScore={setScore}
        score={score} />
      );
    };
    // Returning hills array containing MoleContainer components
    return (
      <>
        {hills}
      </>
    )
  };
  return (
    <div className="App">
      <h1 className="app-header">react a mole!</h1>
      <div className="score-container">
        {score}
      </div>
      <div className='moles-container'>
        {createMoleHill(8)}
      </div>
    </div>
  );
};

export default App;