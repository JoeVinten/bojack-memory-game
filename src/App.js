import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateScore = () => {
    setScore(prevState => prevState + 1);
  };

  // const updateHighScore = () => {
  //   setHighScore(prevState => {
  //     if(prevState > )
  //   })
  // };
  return (
    <div className="App">
      <Header />
      <Scoreboard currentScore={score} highScore={highScore} />
      <Card updateScore={updateScore} />
    </div>
  );
}

export default App;
