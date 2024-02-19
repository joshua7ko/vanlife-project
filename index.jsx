import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./src/pages/Home";
import About from "./src/pages/About";

import Vans from "./src/pages/Vans/Vans";
import VanDetail from "./src/pages/Vans/VanDetail";
import Layout from "./src/components/Layout";
import Dashboard from "./src/pages/Host/Dashboard";
import Income from "./src/pages/Host/Income";
import Reviews from "./src/pages/Host/Reviews";
import HostLayout from "./src/components/HostLayout";

import "./src/pages/server"

/**
 * Challenge:
 * 1. Add a "Host" link to the Navbar that takes you to the "/host" path
 * 2. Create the following components in the pages/Host folder:
 *    a. Dashboard ("/host")
 *    b. Income ("/host/income")
 *    c. Reviews ("/host/reviews")
 *    These components can just have an h1 for now that says, e.g.
 *    "Host Dashboard here".
 * 3. Set up routes for each of these pages in the Routes below. FOR NOW,
 *    don't worry about nesting anything, you can just put them on the same
 *    level as the "/vans", etc. routes below.
 */


function App(){
 return (
    <BrowserRouter>
 
    
       <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
        
               <Route path="about" element={<About/>} />
               <Route path ="vans" element={<Vans/>} />
                     <Route path ="vans/:id" element={<VanDetail/>} />
        
        
              <Route path="host" element={<HostLayout/>} >
               <Route index element={<Dashboard/>} />
               <Route path="income" element={<Income/>} />
               <Route path="reviews" element={<Reviews/>} />
             </Route>
        
         </Route>
      </Routes>
    
    <footer className="footer">&#169;2024  #VANLIFE</footer>
    </BrowserRouter>
 )
}


 /**
   * Challenge: Make the HostLayout component!
   * The HostLayout should use Links to navigate to the following
   * routes: 
   *    * Dashboard ("/host")
   *    * Income ("/host/income")
   *    * Reviews ("/host/reviews")
   * Then replace the parent "/host" route's element below with the
   * new HostLayout component you made.
   * 
   * NOTE: The dashboard route/page will be gone for now, but don't fret.
   * We'll be fixing that in the next lesson.
   */



/* 
          Challenge: 
          1. Turn the "/host" path into a parent route and nest
          "/host/income" and "/host/reviews" as children routes.
          Then try entering "/host/income" in the URL and see what
          happens.
          
          2. See if you can figure out why it did what it did.
          */



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



