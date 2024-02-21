import React from "react";
import { Link, useSearchParams } from "react-router-dom"


  /**
     * Challenge: access the search params in this component
     * 1. Using the hook from react-router-dom, set a variable
     *    called `searchParams`
     * 2. Save the value of the `type` parameter (from the
     *    `searchParams` object) to a variable called `typeFilter`
     * 3. Log the value of the `typeFilter` to the console
     */


  
export default function Vans(){

    const [searchParams, setSearchParams] =useSearchParams();
    const typeFilter = searchParams.get("type")
    console.log(typeFilter); 
     
    
 

    const[vans, setVans] = React.useState([])
    
    React.useEffect(() => {
       fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
    }, [])


    const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans
 
    
    const vanElements = displayedVans.map(van => (
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


    // <Link className="van-type simple" to="?type=simple">Simple</Link>
    // <Link className="van-type luxury" to="?type=luxury">luxury</Link>
    // <Link className="van-type rugged" to="?type=rugged">rugged</Link>
    // <Link className="van-type clear-filters" to=".">Clear</Link>


    return (
        <div className="van-list-container">
            <h1>Explore Our Van Options</h1>
            <div className="van-list-filter-buttons">
            <button onClick={() => setSearchParams({type: "simple"})} className="van-type simple">Simple</button>
            <button onClick={() => setSearchParams({type: "luxury"})} className="van-type luxury">Luxury</button>
            <button onClick={() => setSearchParams({type: "rugged"})} className="van-type rugged">Rugged</button>
            <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}


 /**
     * Challenge: add links to filter the vans by type. Use a hard-coded
     * `to` string like we just practiced. The types are "simple", 
     * "luxury", and "rugged".
     * 
     * For now, give the Links a className of `van-type simple` (and
     * manually replace "simple" with "luxury" and "rugged" for 
     * the Links that filter by those types.)
     * 
     * Include a Link to clear the filters. Its className should be
     * `van-type clear-filters`
     */


 /**
     * Challenge: filter the list of vans based on the `typeFilter`
     * we created earlier. For now, just enter "simple", "luxury",
     * or "rugged" into the search param in the URL to check your work.
     */


   /**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */


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