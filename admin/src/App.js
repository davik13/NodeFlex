import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom"
import {useContext} from "react"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hello, world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   
  );
}

export default App;
