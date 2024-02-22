import React from "react";
import { Link, } from "react-router-dom";


export default function NotFound(){
  
 



    return(
        <div className="style-div">
        <h1>Sorry the page you are looking for does not exist</h1>
        <Link className="back-home" to="/">BACK TO HOME</Link>
        </div>
    )
}