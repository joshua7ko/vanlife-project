import React from "react";
import { useParams, Link, Outlet, NavLink,
     useOutletContext, useLoaderData, defer, Await} from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";







   /**
     * Challenge (not optional!): build the shared UI portion of the
     * Host Van Detail page. This is
     * 
     * Optional portion: also style it to look like the design.
     * 
     * For now, get the data from a request to `/api/host/vans/:id`
     * and display the van image, name, price, type
     */


   /**
 * Challenge: move the data fetching from the useEffect
 * into a loader function instead. ALSO, do the same for
 * the VanDetail.jsx file as well, since that is also 
 * fetching data in a useEffect 😬
 */

export async function loader({params, request}){
    await requireAuth(request)
    return defer({currentVan :getHostVans(params.id)})
}   
   
export default function HostVanDetail(){
    
    const dataPromise = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }




    function renderHostVanElements(currentVan){
        return(
        <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${currentVan.type}`}
                >
                    {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
            </div>
        </div>
        <nav className="host-van-detail-nav">
            <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : null} >Details</NavLink>
            <NavLink to="pricing"  style={({ isActive }) => isActive ? activeStyles : null}>Pricing</NavLink>
            <NavLink to="photos"  style={({ isActive }) => isActive ? activeStyles : null}>Photos</NavLink>
            </nav>
        <Outlet context={{currentVan }}/>
    </div>
        )
    }
    // const [currentVan, setCurrentVan] = React.useState(null)

    // const { id } = useParams() 



//    React.useEffect(() => {
//      fetch(`/api/host/vans/${id}`)
//         .then(res => res.json())
//         .then(data => setCurrentVan(data.vans))
//    }, [])

  
// function child(){
//  const [currentVan, setCurrentVan] = useOutletContext();
// }


//    if(!currentVan){
//    return  <h1>Loading...</h1>
//    }
  
    return(
 
        <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>
        <React.Suspense fallback={<h2>Loading......</h2>}>
<Await resolve={dataPromise.currentVan}>
    {renderHostVanElements}
</Await>
</React.Suspense>
  
    </section>

            
        
    )
  
}  



/**
 * Challenge: check out the docs linked in the slide, and see if you
 * can implement the Outlet Context feature it talks about.
 * 
 * Part of this challenge will require you to (finally) build out those
 * nested components. Again, if you don't need CSS practice, you can
 * skip the styling part, and I'll handle that for you.
 */


/**
 * Challenge: Add the links for the navbar! Check the 
 * Figma design slide to see what the text is.
 * 
 * Make it so the link style changes to more clearly
 * indicate which route we're currently on.
 * 
 * Remember, "Details" leads to /host/vans/:id, not
 * /host/vans/:id/details, so you'll need to employ a
 * trick we recently learned for that to work.
 */

 /**
     * Mini challenge: Try to make it so the "Back to all vans"
     * Link takes people BACK one route.
     * 
     * MAJOR HINT: we just talked about how `cd .` and `cd ..`
     * work in a terminal, and mentioned how `.` represents
     * the current route
     * 
     * MAJOR CAVEAT: it's not going to do what you think it'll
     * do, but we'll learn why and see an easy fix 🤭
     */