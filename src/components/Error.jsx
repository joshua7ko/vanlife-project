import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error(){
    const error = useRouteError()
    console.log(error)



    return(
        <>
        <h1>Error :{error.message}</h1>
        <h3>{error.status} - {error.statusText}</h3>
        </>
    )
}

 /**
     * Challenge: use the error object to display a more helpful
     * error message below
     */