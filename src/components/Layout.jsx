import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
 

/**
     * Challenge: get the Header working again
     */


export default function Layout(){
    return (
        <>
       <Header />
        <Outlet/>
        
        </>
    )
}