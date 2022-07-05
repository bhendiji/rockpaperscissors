import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { motion } from "framer-motion";

// app ui start at 110
const App = () => {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  const [game, setGame] = React.useState({
    userChoice: "",
    computerChoice: "",
    result: "",
    score: 0,
    lives: 3,
    show: true,
    darkmode: false,
  });
  const [scores, setScores] = React.useState(
    JSON.parse(localStorage.getItem("scores")) || []
  );

  //Dark Mode
  const toggleDarkMode = () => {
    setGame((prev) => ({ ...prev, darkmode: !prev.darkmode }));
  };
  //Buttons handling
  const handleInput = (value) => {
    const choices = ["rock", "paper", "scissors"];
    const randomchoice = choices[Math.floor(Math.random() * 3)];
    setGame((prev) => ({
      ...prev,
      userChoice: `${value}`,
      computerChoice: `${randomchoice}`,
    }));
  };
  const newGame = () => {
    setGame({
      userChoice: "",
      computerChoice: "",
      result: "",
      score: 0,
      lives: 3,
      show: true,
    });
  };
  //Result computing
  useEffect(() => {
    if (game.userChoice === "rock") {
      if (game.computerChoice === "rock")
        setGame((prev) => ({ ...prev, result: "it's a draw" }));
      else if (game.computerChoice === "paper")
        setGame((prev) => ({
          ...prev,
          result: "you lost",
          lives: prev.lives - 1,
        }));
      else
        setGame((prev) => ({
          ...prev,
          result: "you won",
          score: prev.score + 1,
        }));
    } else if (game.userChoice === "paper") {
      if (game.computerChoice === "paper")
        setGame((prev) => ({ ...prev, result: "it's a draw" }));
      else if (game.computerChoice === "scissors")
        setGame((prev) => ({
          ...prev,
          result: "you lost",
          lives: prev.lives - 1,
        }));
      else
        setGame((prev) => ({
          ...prev,
          result: "you won",
          score: prev.score + 1,
        }));
    } else if (game.userChoice === "scissors") {
      if (game.computerChoice === "scisors")
        setGame((prev) => ({ ...prev, result: "it's a draw" }));
      else if (game.computerChoice === "rock")
        setGame((prev) => ({
          ...prev,
          result: "you lost",
          lives: prev.lives - 1,
        }));
      else
        setGame((prev) => ({
          ...prev,
          result: "you won",
          score: prev.score + 1,
        }));
    }
  }, [game.userChoice, game.computerChoice]);

  //handling storage
  useEffect(() => {
    if (game.lives === 0) {
      localStorage.setItem("scores", JSON.stringify(scores));
    }
  }, [game.lives, scores]);
  useEffect(() => {
    if (game.lives === 0) {
      setGame((prev) => ({ ...prev, show: false }));
      setScores((prev) => [game.score, ...prev]);
    }
  }, [game.lives]);
  return (
    <div className={`app ${game.darkmode ? "darkApp " : ""}`}>
      <section className="logo">
        <ul className={`nav ${game.darkmode ? "darkNav" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/scores">Scores</NavLink>
          </li>
          <li>
            <motion.button
              whileHover={{ scale: 1.15 }}
              onClick={toggleDarkMode}
            >
              darkmode
            </motion.button>
          </li>
        </ul>
      </section>
      <section className={`section2 ${game.darkmode ? "darkSection2" : ""}`}>
        {game.show ? (
          <div
            className={`section2First ${
              game.darkmode ? "darkSection2First" : ""
            }`}
          >
            <h1>
              COMPUTER CHOICE <br />
              {game.computerChoice}
            </h1>
            <h1>
              USER CHOICE <br />
              {game.userChoice}
            </h1>
          </div>
        ) : (
          <div
            className={`section2End ${game.darkmode ? "darkSection2End " : ""}`}
          >
            <h1>Bwahaha</h1>
          </div>
        )}
      </section>

      <section
        className={`scoreBoard ${game.darkmode ? "darkScoreBoard" : ""}`}
      >
        <h1>Live(s) left: {game.lives}</h1>
        <h1>Score: {game.score}</h1>
      </section>
      <section className={`result ${game.darkmode ? "darkResult" : ""}`}>
        <h1>Result: {game.result}</h1>
      </section>
      <section className={`section3 ${game.darkmode ? "darkSection3" : ""}`}>
        {game.show ? (
          <div className={`buttons `}>
            <motion.button
              className={`Buttons ${game.darkmode ? "darkButtons" : ""}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleInput(rock)}
            >
              Rock
            </motion.button>
            <motion.button
              className={` Buttons ${game.darkmode ? "darkButtons" : ""}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleInput(paper)}
            >
              Paper
            </motion.button>
            <motion.button
              className={`Buttons ${game.darkmode ? "darkButtons" : ""}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              // whileFocus={{ scale: 1.15 }}
              onClick={() => handleInput(scissors)}
            >
              Scissors
            </motion.button>
          </div>
        ) : (
          <div className="playAgainButton">
            <h1>Want to play again?</h1>
            <button onClick={newGame}>click me!</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
