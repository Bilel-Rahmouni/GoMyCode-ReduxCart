import React, { useState, useEffect } from "react";
import axios from "axios";

const Groups = () => {
  const [persons, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData((persons) => res.data);
    });
  }, []);

  return (
    // <ul>
    //   {persons.map((person) => (
    //     <li key={person.id}>{person.title}</li>
    //   ))}
    // </ul>
    <div className="eventsContainer">
      {persons.map((person) => (
        <div
          className="card"
          key={person.id}
          style={{ width: "300px", height: "500px" }}
        >
          <div className="card-body">
            <h5 className="card-title">{person.title}</h5>
            <h6 className="card-title">{person.body}</h6>
            <button className="btn btn-primary btn-sm">More details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Groups;
