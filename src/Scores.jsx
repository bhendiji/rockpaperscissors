import React from "react";
import { NavLink } from "react-router-dom";
const Scores = () => {
  const hmm = JSON.parse(localStorage.getItem("scores")) || [];
  console.log(hmm);
  const handleDelete = () => {
    localStorage.clear("scores");
  };

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <h1>Scores</h1>
      <ul>
        {hmm.map((score) => (
          <li key={score}>{score}</li>
        ))}
      </ul>
      <h4>Clear highsores?</h4>
      <button onClick={handleDelete}>click here</button>
    </>
  );
};

export default Scores;
