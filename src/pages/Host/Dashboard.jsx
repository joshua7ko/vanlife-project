import React from "react";
import { Outlet} from "react-router-dom";




export default function Dashboard(){
    return (
        <>
        <Outlet />
        <h1>Dashboard Goes Here</h1>
        </>
    )
}