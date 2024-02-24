import React from "react"
import {Link, NavLink } from "react-router-dom"
import imageUrl from "/src/assets/avatar-icon.png" 



export default function Header(){


  return (
<header>
<Link className="site-logo" to="/">#VANLIFE</Link>

<nav className="nav-container">
<NavLink to="/host" className={({isActive}) => isActive ? "active-link" : null} >Host</NavLink>    
<NavLink to="/about" className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
<NavLink to="/vans" className={({isActive}) => isActive ? "active-link" : null}>Vans</NavLink>

<Link to="login" className="login-link">
                    <img 
                        src={imageUrl} 
                        className="login-icon"
                    />
                </Link>
</nav>
</header>
  )
}

    /**
     * Challenge - part 1:
     * Make the main navbar indicate the currently-active route. (You can
     * leave the home link alone, since it's doubling as our logo. Only
     * make changes to the /host, /about, and /vans links)
     * 
     * Use the following CSS rules:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * You can use either inline styles or a className.
     */