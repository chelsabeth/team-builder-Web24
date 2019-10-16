import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";

function App() {

  const [member, setMember] = useState()

  const addNewMemeber = note => {
    setMember([...member, note])
  }
  return (
     <div className="App">
       <h1>Team Members</h1>
    </div>
  );
}

export default App;
