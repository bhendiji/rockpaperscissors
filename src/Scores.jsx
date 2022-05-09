import React from "react";
import { NavLink } from "react-router-dom";
const Scores = () => {
  const hmm = JSON.parse(localStorage.getItem("scores"));
  console.log(hmm);

  return (
    <>
      <h1>Scores</h1>
      <NavLink to="/">Home</NavLink>
    </>
  );
};

export default Scores;
