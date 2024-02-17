import React from "react";
import { Link } from "react-router-dom"





/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch(/api/vans)` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 */


export default function Vans(){


    const[vans, setVans] = React.useState([])
    
    React.useEffect(() => {
       fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
    }, [])

    /**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */
    
    const vanElements = vans.map(van => (
        <div key={van.id}  className="van-tile">
        <Link to={`/vans/${van.id}`} 
        aria-label={`View details for ${van.name}, priced at $ ${van.price} per day`}
        >
        
            <img src={van.imageUrl} alt={`image of ${van.name}`} />
            <div className="van-info">
                <p>{van.name}</p>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
       
    ))



    return (
        <div className="van-list-container">
            <h1>Explore Our Van Options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
