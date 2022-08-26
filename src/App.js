import './App.css';

import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="App">
      <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(prevMode => !prevMode)}
      />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
