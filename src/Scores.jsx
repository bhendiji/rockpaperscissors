import React from "react";
import { NavLink } from "react-router-dom";
const Scores = () => {
  const hmm = JSON.parse(localStorage.getItem("scores")) || [];
  let f = [hmm];
  const handleDelete = () => {
    localStorage.clear("scores");
    window.location.reload();
  };
  for (let i = 0; i < f[0].length - 1; i++) {
    for (let j = 0; j < f[0].length - 1; j++) {
      let temp = f[0][j];
      f[0][j] = f[0][j + 1];
      f[0][j + 1] = temp;
    }
  }

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <h1>Scores</h1>
      <ul>
        {hmm.map((score) => (
          <li key={score * Math.random()}>{score}</li>
        ))}
      </ul>
      <h4>Clear highsores?</h4>
      <button onClick={handleDelete}>click here</button>
    </>
  );
};

export default Scores;
