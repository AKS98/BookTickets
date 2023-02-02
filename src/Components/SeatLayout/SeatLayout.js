import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MovieContext } from "../../Context/MovieContext";

const SeatLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movieName = location.state?.movieName;
  const movieDate = location.state?.movieDate;
  const seatLayoutArr = [...Array(50).keys()];
  const { movieBooked, setMovieBooked } = useContext(MovieContext);
  const [selectSeat, setSelectSeat] = useState([]);
  // API call should happen in ideal case
  useEffect(() => {
    if (!location.state?.movieName || !location?.state?.movieDate) {
      Navigate("/");
    }
  }, [location]);
  const handleSeatSelector = (index) => {
    const checkBooked = movieBooked?.[movieName]?.[movieDate]
      ? movieBooked?.[movieName]?.[movieDate]?.filter((seatNo) => {
          return seatNo === index;
        }).length !== 0
      : false;
    if (!checkBooked) {
      setSelectSeat([...selectSeat, index]);
    } else {
      return;
    }
  };
  const handleSeatBooking = () => {
    let booking = movieBooked || {};

    if (booking?.[movieName]) {
      if (booking?.[movieName]?.[movieDate]) {
        booking[movieName][movieDate].push(...selectSeat);
      } else {
        booking[movieName][movieDate] = [...selectSeat];
      }
    } else {
      booking[movieName] = {};
      movieBooked[movieName][movieDate] = [...selectSeat];
    }
    setMovieBooked({ ...booking });
    // API Post Call to happen here and take to confirmation page
    navigate("/");
  };
  const handleCancelBook = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <MovieTheter>
        <ScreenTheater>Screen This Way</ScreenTheater>
        <SeatMapper>
          {seatLayoutArr?.map((item, i) => {
            return (
              <Seats
                selected={
                  selectSeat?.filter((seatNo) => {
                    return i === seatNo;
                  }).length !== 0
                }
                disabled={
                  movieBooked?.[movieName]?.[movieDate]
                    ? movieBooked?.[movieName]?.[movieDate]?.filter(
                        (seatNo) => {
                          return i === seatNo;
                        }
                      ).length !== 0
                    : false
                }
                onClick={() => handleSeatSelector(i)}
              ></Seats>
            );
          })}
        </SeatMapper>
        <ButtonWrapper>
          <button className="btn btn-primary" onClick={handleSeatBooking}>
            Book Now
          </button>
          <button className="btn btn-primary" onClick={handleCancelBook}>
            Go Back
          </button>
        </ButtonWrapper>
      </MovieTheter>
    </div>
  );
};

export default SeatLayout;

const SeatMapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 5rem 0 0 0;
  padding: 0 2rem;
`;

const Seats = styled.div`
  width: 2rem;
  height: 2rem;
  border: ${(props) =>
    props.disabled
      ? "solid 5px yellow"
      : props?.selected
      ? "solid 5px green"
      : "solid 5px black"};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
const ScreenTheater = styled.div`
  width: 50%;
  height: 5rem;
  background-color: silver;
  font-size: 1.5rem;
  text-align: center;
`;
const MovieTheter = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
