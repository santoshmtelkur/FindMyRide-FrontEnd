import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();

    const [sourceinput, setSourceinput] = useState("");
    const [destinationinput, setDestinationinput] = useState("");
  


    const isFormFilled =
        sourceinput.trim() !== "" &&
        destinationinput.trim() !== "";
           
    const [name, setName] = useState("");

 fetch("http://localhost:8080/profile", {
  method: "GET",
  credentials: "include"  
})
.then(res => res.text())
.then(data => setName(data))
.catch(err => console.log(err));

    return (
        <div className="home-container">
            <div className="main-content">
                <h2 className="welcome-text">Welcome {name}</h2>

                <input
                    className="location-input"
                    placeholder="Enter Pickup"
                    value={sourceinput}
                    onChange={(e) => setSourceinput(e.target.value)}
                />
                <input
                    className="location-input"
                    placeholder="Enter destination"
                    value={destinationinput}
                    onChange={(e) => setDestinationinput(e.target.value)}
                />

                <button
                    className={`see-price-btn button ${isFormFilled ? "activeButton" : "disabledButton"}`}
                    type="submit"
                    disabled={!isFormFilled}
                    onClick={() => navigate("/Result")}
                >
                    See Price
                </button>
            </div>

            <button className="feedback-btn">Feedback</button>

            <h2 className="follow-label">Follow Us On</h2>
        </div>
    );
}

export default Home;