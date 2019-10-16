import React, { useState } from 'react';
import './App.css';
import Form from "./Components/Form";
import Members from "./Components/Members";

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
       <Members membersList={member} /> 
    </div>
  );
}

export default App;
