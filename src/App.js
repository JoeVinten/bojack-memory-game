import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(prevState => prevState + 1);
  };

  const endGame = () => {
    setScore(0);
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard currentScore={score} />
      <Card updateScore={updateScore} endGame={endGame} />
    </div>
  );
}

export default App;
