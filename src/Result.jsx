import { useNavigate } from "react-router-dom";
import "./Result.css";
import { useState } from "react";

function Result() {

 const [sourceinput, setSourceinput] = useState("Bengaluru");
    const [destinationinput, setDestinationinput] = useState("Mysuru");

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <button className="location" onClick={() => navigate("/")}>
        Enter location again
      </button>

{/*----------------Auto ----------------------*/}

 <input
                    className="location-input"
                    placeholder="Enter Pickup"
                    value={sourceinput}
                  
                    onChange={(e) =>  setSourceinput(e.target.value)}
                />

                <p>To</p>
                <input
                    className="location-input"
                    placeholder="Enter destination"
                    value={destinationinput}
                        onChange={(e) => setDestinationinput(e.target.value)}
                />



  <p className="category">Auto</p>

  <div className="row">
    <p className="provider">Rapido</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

  <div className="row">
    <p className="provider">Ola</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

  <div className="row">
    <p className="provider">Uber</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

{/*----------------Car ----------------------*/}

  <p className="category">Car</p>

  <div className="row">
    <p className="provider">Rapido</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

  <div className="row">
    <p className="provider">Ola</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

  <div className="row">
    <p className="provider">Uber</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

{/*----------------Bike ----------------------*/}

  <p className="category">Bike</p>

  <div className="row">
    <p className="provider">Rapido</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

  <div className="row">
    <p className="provider">Ola</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

  <div className="row">
    <p className="provider">Uber</p>
    <div className="box">
      <div className="text">
        <p>price: 700</p>
        <p>ETA: 5 min</p>
      </div>
      <button className="book-btn">Book</button>
    </div>
  </div>

    </div>
  );
}

export default Result;