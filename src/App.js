import React, {useState} from 'react'
import './App.css';
import { ScrollPosition } from "./ContextAPI";
import { Medium } from "./Components/Medium";



function App() {

  const scroll = useState(0)
  
  
  

  return <ScrollPosition.Provider value={scroll} >
      <Medium />
  </ScrollPosition.Provider>
}

export default App;
