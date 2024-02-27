import {redirect} from 'react-router'

export async function requireAuth() {
 const isLoggedIn = false

 if (!isLoggedIn) {
  const response = redirect('/login')
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