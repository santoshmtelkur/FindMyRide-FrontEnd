import { useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <button className="location" onClick={() => navigate("/")}>
        Enter location again
      </button>

{/*----------------Auto ----------------------*/}
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