import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Book Your favourite Movies</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: grey;
  text-align: center;
  color: white;
`;
