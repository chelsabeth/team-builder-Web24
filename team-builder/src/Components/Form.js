import React, { useState } from "react";

const Form = props => {
    console.log("these are our props:", props);

    const [members, setMembers] = useState({
        name: "",
        email: "",
        role: ""
    });
    
    const changeHandler = event => {
        setMembers({...members, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(members);
        setMembers({name: "", email: "", role: ""})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name"> Name: </label>
            <input 
            name="name"
            id="name"
            type="text"
            placeholder="name"
            onChange={changeHandler}
            value={members.name}
            />

            <label htmlFor="email"> Email: </label>
            <input 
            name="email"
            id="email"
            type="text"
            placeholder="email"
            onChange={changeHandler}
            value={members.email}
            />

            <label htmlFor="role"> Role: </label>
            <input
            name="role"
            id="role"
            type="text"
            placeholder="role"
            onChange={changeHandler}
            value={members.role}
            />
            <button type="submit">Add Member!</button>
        </form>
    )
}
export default Form;