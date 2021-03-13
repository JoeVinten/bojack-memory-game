import styled from "styled-components";

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #fefefe;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
`;

const Header = () => {
  return (
    <div>
      <Title>BoJack Memory Game</Title>
    </div>
  );
};

export default Header;
