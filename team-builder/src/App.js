import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";

function App() {

  const [member, setMember] = useState([
    {
      name: "Chelsea Wetzel",
      email: "ChelsWetz@gmail.com",
      role: "student",
    },

    {
      name: "Will VanOrder",
      email: "wvanorder@gmail.com",
      role: "TL"
    }
  ]);

  const addNewMember = note => {
    setMember([...member, note])
  }
  return (
     <div className="App">
       <h1>Team Members</h1>
       <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
