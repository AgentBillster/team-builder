import React from "react"


const Teams = props => {
    return (
        <div className="people-list">
          {props.team.map(people => (
            <div className="person" key={people.id}>
              <h2>{people.name}</h2>
              <p>{people.email}</p>
              <p>{people.role}</p>
            </div>
          ))}
        </div>
      );

}




export default Teams