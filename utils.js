import {redirect} from 'react-router'

/**
 * Challenge: Implement the `redirectTo` feature we just
 * learned about to VanLife!
 * 
 * 1. Pass the request to all calls to `requireAuth` (this
 *    includes all inline loaders on /host routes as well
 *    as the loaders defined separately inside the component
 *    files of /host routes)
 * 2. Receive the request in requireAuth and pass along a
 *    search param of `redirectTo`
 * 3. You're on your own for the last part :) You can do it! 💪
 */



export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")

 if (!isLoggedIn) {
  const response = redirect(
    `/login?message=You Must Login First.&redirectTo=${pathname}`
    )
  response.body = true
  throw response
 }
 return null
}










// import { redirect } from "react-router-dom"

// export async function requireAuth() {
//     const isLoggedIn = false
//     if (!isLoggedIn) {
//      return redirect("/login");
//     }
    
// }