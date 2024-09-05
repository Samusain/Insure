import React from 'react'
import Main from './Components/Main/Main'
import Mainlayout from './Components/Mainlayout/Layout'
import './App.css';


function App() {
  return (
    <div className="App">
      <Mainlayout>
        <Main/> 
      </Mainlayout>
    </div>
  );
}

export default App;
