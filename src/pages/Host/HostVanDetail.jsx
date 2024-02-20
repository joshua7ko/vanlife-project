import React from "react";
import { useParams } from "react-router-dom";


   /**
     * Challenge (not optional!): build the shared UI portion of the
     * Host Van Detail page. This is
     * 
     * Optional portion: also style it to look like the design.
     * 
     * For now, get the data from a request to `/api/host/vans/:id`
     * and display the van image, name, price, type
     */

   
export default function HostVanDetail(){

    const { id } = useParams()

   const [currentVan, setCurrentVan] = React.useState(null)

   React.useEffect(() => {
     fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
   }, [])

  
   if(!currentVan){
   return  <h1>Loading...</h1>
   }
  
    return(
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
            
        </div>
    )
  
}  