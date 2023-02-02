import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import SeatLayout from "./Components/SeatLayout/SeatLayout";
import { MovieContext } from "./Context/MovieContext";

function App() {
  const [movieBooked, setMovieBooked] = useState({});
  // Css in index.css
  return (
    <div className="App">
      <MovieContext.Provider
        value={{ movieBooked, setMovieBooked }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/movie" element={<SeatLayout/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>

        </Routes>

      </MovieContext.Provider>
    </div>
  );
}

export default App;
