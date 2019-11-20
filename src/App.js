import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dragit from "./drag";

function App() {
  return (
    <div>
    <Dragit headerToDrag="mydivheader"  posX="50%" posY="20" minimizable="true">
    <div className="App">
        <div className="mydivheader" id="mydivheader"></div>
      <header className="App-header-1">
        <img src={logo} className="App-logo" alt="logo"  id="App-logoid"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 123
        </a>
      </header>
    </div>
    </Dragit>


    <Dragit headerToDrag="mydivheader" posX="420" posY="20" minimizable="true">
    <div className="App">
        <div className="mydivheader" id="mydivheader"></div>
      <header className="App-header-1">
        <img src={logo} className="App-logo" alt="logo"  id="App-logoid"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 12333333333333333333333333
        </a>
      </header>
    </div>
    </Dragit>

    </div>
  );
}

export default App;
