import React from "react";
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

const Scoreboard = props => {
  return (
    <ScoreboardContainer>
      <ScoreBoardItem>Current Score: {props.currentScore}</ScoreBoardItem>

      <ScoreBoardItem>High Score: {props.highScore}</ScoreBoardItem>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
