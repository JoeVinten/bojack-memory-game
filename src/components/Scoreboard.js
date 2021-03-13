import { useState } from "react";
import styled from "styled-components";

const ScoreboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 30%;
  margin: 0 auto;
`;

const ScoreBoardItem = styled.div`
  font-size: 1.2em;
  font-weight: 800;
`;

const Scoreboard = ({ currentScore }) => {
  const [highScore, setHighScore] = useState(0);

  if (currentScore > highScore) setHighScore(currentScore);

  return (
    <ScoreboardContainer>
      <ScoreBoardItem>Current Score: {currentScore}</ScoreBoardItem>

      <ScoreBoardItem>High Score: {highScore}</ScoreBoardItem>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
