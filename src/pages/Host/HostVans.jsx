import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";

/**
 * Challenge: Implement defer, Await, and Suspense in the
 * /host/vans route.
 */

export async function loader({request}){
    await requireAuth(request)
    return defer({ vans :getHostVans()})
}

export default function HostVans(){
   
    const dataPromise = useLoaderData()

    
    // const [vans, setVans] =React.useState([])
   

    // React.useEffect(()  => {
    //     fetch("/api/host/vans")
    //      .then(res => res.json())
    //      .then(data => setVans(data.vans))
    // }, [])

function renderVanElements(vans){

    const hostVansEls = vans.map(van => (
        <Link
        to={`${van.id}`}
        key={van.id}
        className="host-van-link-wrapper"
    >
        <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>
)) 
return(
    <div className="host-vans-list">

    <section>
        {hostVansEls}
    </section>


</div>
)
}
    
    return(
        <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <React.Suspense fallback={<h2>Loading Host Vans....</h2>}>
        <Await resolve={dataPromise.vans}>
            {renderVanElements}
        </Await>
        </React.Suspense>
    </section>

    )
}