import React from "react";
import { useParams, Link, useLocation, useLoaderData, defer, Await} from "react-router-dom";
import { getVans } from "../../../api";


export function loader({params}){
    return getVans(params.id)
}

export default function VanDetail(){
    // const params = useParams()
    const location = useLocation()
    // console.log(location)

    const van = useLoaderData()

   
    const search = location.state && location.state.search || ""
    const type = location.state?.type || "all"


//old code

    // const [van, setVan] = React.useState(null)

    //   React.useEffect(() =>{
    //     fetch(`/api/vans/${params.id}`)
    //          .then(res => res.json())
    //          .then(data => setVan(data.vans))
    //   },[params.id])

       /**
     * Challenge: When a filter is applied, change the text of
     * the button to say "Back to luxury vans" (e.g.) instead of
     * "Back to all vans".
     * 
     * As usual, there's more than one way to solve this, so just
     * give it your best shot
     */


  
    return(
        <div className="van-detail-container">
            <Link
            to={`..${search}`}
            relative="path"
            className="back-button"
        >&larr; <span>{`Back to ${type} vans`}</span></Link>
        {/* {van ?  */}
        
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        {/* ) : <h2>Loading...</h2>} */}
    </div>
    )
}

  /**
     * Challenge: modify the Link `to` prop below to send the user
     * back to the previous page with the searchParams included, if
     * they exist. (Remember we may not have anything in that state
     * if there were no filters applied before coming to this
     * van detail page, so make sure to "code defensively" to handle
     * that case.)
     */






 /**
     * Challenge part 1:
     * Re-write what I just wrote and console log the params object
     */
/**
 * Challenge part 2:
 * Using the endpoint set up (with mirage js), fetch the data
 * for the van with the current ID from params.id. Log the data
 * that comes back to the console.
 * 
 * Hint: the endpoint is a GET request to `/api/vans/:vanid`
 */