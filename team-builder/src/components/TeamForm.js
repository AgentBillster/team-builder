import React, { useState } from 'react';

const TeamForm = props => {

    const [people, setPeople] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setPeople({ ...people, [e.target.name]: e.target.value })
    };
    
    const submitForm = e => {
        e.preventDefault()
        props.addNewPerson(people)
    };

    return (
        <form onSubmit={submitForm}>

        <label>First Name</label>

        <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="name"
        />

        <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        placeholder="email"
        />

        <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        placeholder="role"
        />

        <button type="submit">add person</button>

        </form>

    
    )



}





export default TeamForm