import React, { useState } from 'react';
import Teams from "./components/Teams"
import TeamForm from "./components/TeamForm"
import './App.css';

function App() {
  const [team, SetTeam] = useState([
    {
    id: 1,
    name: "william",
    email: "william@gmail.com",
    role: "backend"
    }
  ]);

  const addNewPerson = people => {
    const newPerson = {
      id: Date.now(),
      name: people.name,
      email: "william@gmail.com",
      role: "backend"
    };
    SetTeam([...team, newPerson])
  }

  return (
    <div className="App">
      <h1>The Team</h1>
      <TeamForm addNewPerson={addNewPerson}/>
      <Teams team={team} />

    </div>
  );
}

export default App;
