import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import "./src/pages/server"
import Vans from "./src/pages/Vans";



function App(){
 return (
    <BrowserRouter>
    <header>
    <Link className="site-logo" to="/">#VANLIFE</Link>
    
    <nav>
    <Link to="/about">About</Link>
    <Link to="/vans">Vans</Link>
    </nav>
    </header>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path ="/vans" element={<Vans/>} />
    </Routes>
    <footer className="footer">@2024 #VANLIFE</footer>
    </BrowserRouter>
 )
}






ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
);


/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */





/**
 * Challenge: Create the Vans list page, Route, and Link
 * 
 * 1. Create a Vans component in the "pages" directory. For now,
 *    just render <h1>Vans page goes here 🚐</h1>
 * 2. Create a Route for the Vans page on the /vans route
 * 3. Add a Link in the nav bar to the Vans route
 */




