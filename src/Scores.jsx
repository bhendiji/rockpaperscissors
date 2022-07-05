import React from "react";
import { NavLink } from "react-router-dom";
const Scores = () => {
  const hmm = JSON.parse(localStorage.getItem("scores")) || [];
  console.log(typeof hmm);
  let f = JSON.stringify(hmm);
  console.log(typeof f);
  const g = f.flat;
  const handleDelete = () => {
    localStorage.clear("scores");
    window.location.reload();
  };
  console.log(g);
  for (let i = 0; i < f[0].length - 1; i++) {
    for (let j = 0; j < f[0].length - 1; j++) {
      let temp = f[0][j];
      f[0][j] = f[0][j + 1];
      f[0][j + 1] = temp;
    }
  }
  // const q={ process.env.apikey };
  // console.log(q);
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <h1>Scores</h1>
      <ul>
        {hmm.map((score) => (
          <li key={score * Math.random()}>{score}</li>
        ))}
      </ul>
      <h4>Clear highscores?</h4>
      <button onClick={handleDelete}>click here</button>
    </>
  );
};

export default Scores;
