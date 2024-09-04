import React, { useState } from 'react';
import BubbleSort  from './components/BubbleSort';
import InsertionSort from './components/insertionSort';
import CountSort from './components/countSort';

import './App.css';

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');

  const renderVisualizer = () => {
    switch (selectedAlgorithm) {
      case 'Bubble Sort':
        return <BubbleSort/>;
      case 'Insertion Sort':
        return <InsertionSort/>;
      case 'Count Sort':
        return <CountSort/>
    }
  };

  return (
    <div className="App">
      {/* <h1>Algorithm Visualizer</h1> */}
      <div>
        <label className='alog'>Select Sorting Algorithm: </label>
        <select onChange={(e) => setSelectedAlgorithm(e.target.value)}>
          <option value="">--Select--</option>
          <option value="Bubble Sort">Bubble Sort</option>
          <option value="Insertion Sort">Insertion Sort</option>
          <option value="Count Sort">Count Sort</option>



        </select>
      </div>
      <div className="visualizer-container">
        {renderVisualizer()}
      </div>
    </div>
  );
}

export default App;
