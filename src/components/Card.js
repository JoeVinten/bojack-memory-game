import React, { useState } from "react";
import styled from "styled-components";

import bojack from "../images/bojack.png";
import carolyn from "../images/carolyn.png";
import diane from "../images/diane.png";
import mrpeanutbutter from "../images/mrpeanutbutter.png";
import sarah from "../images/sarah.png";
import todd from "../images/todd.png";

const CardRow = styled.div`
  display: flex;
  margin: 2em auto;
  max-width: 80%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CardItem = styled.div`
  /* background: white; */
  height: 250px;
  min-width: 150px;
  border-radius: 1.2em;
  display: flex;
  justify-content: center;
  margin: 5px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.4);

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 250px;
  user-select: none;
`;

const Card = ({ updateScore }) => {
  const [characters, setCharacter] = useState([
    bojack,
    carolyn,
    diane,
    mrpeanutbutter,
    sarah,
    todd
  ]);
  const [selectedCharacter, setSelectedCharacter] = useState({
    bojack: 0,
    carolyn: 0,
    diane: 0,
    mrpeanutbutter: 0,
    sarah: 0,
    todd: 0
  });

  const handleClick = event => {
    setCharacter([...characters].sort(() => Math.random() - 0.5));

    const currentElement = event.target
      .getAttribute("data-key")
      .split("/")
      .pop()
      .split(".")
      .shift();

    // if (selectedCharacter[currentElement] === 0) {
    //   setSelectedCharacter(prevState => {
    //     prevState,
    //       (selectedCharacter[currentElement] =
    //         selectedCharacter[currentElement] + 1);
    //   });
    // }
    console.log(selectedCharacter);

    // setSelectedCharacter((selectedCharacter[currentElement] = "1"));
    // if (selectedCharacter === 0) {
    //   setSelectedCharacter();
    // }
    // if (selectedCharacter.currentElement) {
    //   console.log("reset");
    // } else {

    //   updateScore();

    // }
  };

  return (
    <CardRow>
      {characters.map(character => {
        return (
          <CardItem key={character} data-key={character} onClick={handleClick}>
            <Image src={character} data-key={character}></Image>
          </CardItem>
        );
      })}
    </CardRow>
  );
};

export default Card;