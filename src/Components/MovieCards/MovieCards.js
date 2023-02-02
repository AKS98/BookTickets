import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieCards = ({ name, dates, imgSrc }) => {
  const navigate = useNavigate();
  const handleMovieClick = (date) => {
    // To Add Date and Movie to SearchParam and navigate to next page
    navigate("/movie", { state: { movieName: name, movieDate: date } });
  };
  return (
    <CardHolder>
      <MovieTitle>
        <img src={imgSrc} alt="movieImage" />
        <h1>{name}</h1>
      </MovieTitle>
      <DateHolder>
        {dates?.map((item) => {
          return (
            <DateButton onClick={() => handleMovieClick(item)}>
              {item}
            </DateButton>
          );
        })}
      </DateHolder>
    </CardHolder>
  );
};

export default MovieCards;

const DateButton = styled.div`
  padding: 1rem 2rem;
  color: green;
  font-size: 1rem;
  cursor: pointer;
  border: solid 1px green;
  border-radius: 2rem;
`;
const CardHolder = styled.div`
  h1 {
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
  margin-left: 2rem;
  padding-top: 2rem;
  img {
    width: 15rem;
    object-fit: cover;
  }
`;
const DateHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem;
`;
const MovieTitle= styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;
