import React from "react";
import styled from "styled-components";
import MovieCards from "../MovieCards/MovieCards";
import { movieDetailsArr } from "./movieDetails";

const HomePage = () => {
  return (
    <div className="container homeContainer">
      {movieDetailsArr.map((item) => {
        return (
          <MovieCardHolder className="movieCard-holder">
            <MovieCards name={item.name} dates={item.dates} />
          </MovieCardHolder>
        );
      })}
    </div>
  );
};

export default HomePage;

const MovieCardHolder = styled.div`
  width: 100%;
  border-radius: 2rem;
  background-color: white;
  border: solid 1px black;
  padding: 1rem 0;
  &: hover {
    background-color: --var(color-bg);
  }
`;
