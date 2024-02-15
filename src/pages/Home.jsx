import React from "react";
// import { ReactDOM } from "react-dom/client";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
        <h1>You got the travel plans, we<br></br>
            got the travel vans
        </h1>
        <p>Add adventure to your life by making the #vanlife movement
            Rent the perfect van to make your perfect road trip
        </p>
        <Link to="vans" >Find Your Vans</Link>
       
        </div>
    )
}