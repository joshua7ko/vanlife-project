import React from "react"
import { useLoaderData, useNavigate, Form, redirect, useActionData, 
  useNavigation
} from "react-router-dom"
import { loginUser } from "../../api"



/**
 * Challenge: Pass a message from the requireAuth function
 * that says "You must log in first." and display that message
 * in an <h2> BELOW the <h1>. Give it a classname of "red" for
 * some quick styling - (I added the CSS already).
 */


/**
 * Challenge: hook up our form so it (halfway) works.
 * 
 * 1. Pull in the `loginUser` function from the api.js file
 * 2. Call loginUser when the form is submitted and console.log 
 *    the data that comes back. Use "b@b.com" as the username and
 *    "p123" as the password.
 * 
 *    NOTE: loginUser returns a promise, so you'll need
 *    a .then(data => {...}) to access the data, or use
 *    a separate aync function defined inside handleSubmit
 * 3. TBA
 */



/**
 * Challenge: Code the sad path 🙁
 * 3. Add a `status` state and default it to "idle". When the 
 *    login form begins submitting, set it to "submitting". When
 *    it's done submitting (whether successful or not), set it 
 *    to "idle" again.
 * 4. Disable the button when the `status` state is "submitting"
 *    (this may require some Googling if you haven't done this
 *    before).
 * 5. Add an `error` state and default it to `null`. When the
 *    form is submitted, reset the errors to `null`. If there's
 *    an error from `loginUser` (add a .catch(err => {...}) in 
 *    the promise chain), set the error to the error that 
 *    comes back.
 * 6. Display the error.message below the `h1` if there's ever
 *    an error in state
 */



/**
 * Challenge: Start implementing actions to handle our
 * form data
 * 
 * 1. Replace <form> with <Form> from React Router
 * 2. Add a `method` prop to the <Form>.
 * 3. Create an action function in this file. It should just log
 *    "Action function" to the console and `return null` for now.
 * 4. Register the action function on the <Route>
 */


/**
 * Challenge: Pull in the formData from our Form
 * For now, just log the data to the console.
 */




export function loader({request}){
    return new URL(request.url).searchParams.get("message")
}



export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
    .searchParams.get("redirectTo") || "/host"
    try{

        const data = await loginUser({email, password})
    localStorage.setItem("loggedin", true)
    
    const response = redirect(pathname)
    response.body = true
    return response
    }
    catch(err){
        return err.message

    }
    

     // console.log(data)
}


/**
 * Challenge: Use useNavigation in order to track the current
 * status of the form submission and remove all the `status`
 * tracking we were handling manually in state.
 * 
 * Then, you should be able to completely remove the handleSubmit
 * function 🎉
 */


export default function Login() {
    // const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
  

    // const [status, setStatus] = React.useState("idle")
    const errorMessage = useActionData()
    const navigation = useNavigation()
    // const [error, setError] = React.useState(null)
    const message = useLoaderData() 

    // const navigate = useNavigate()

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setStatus("submitting")
    //     // setError(null)
    //     loginUser(loginFormData)
    //       .then(data => {
    //         navigate("/host", {replace: true})
    //     })
    //     //   .catch(err => setError(err))
    //       .finally(()=> setStatus("idle"))
          
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
           
    //     }  
    //     ))
        
    // }
    

    

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            <Form method="post" className="login-form" 
            replace >
        
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    // onChange={handleChange}
                   
                    // value={loginFormData.email}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    // onChange={handleChange}
                    
                    // value={loginFormData.password}
                />
                <button disabled={navigation.state === "submitting"}>
                    
                    {navigation.state==="submitting" ? "Logging in..." :"Log in" }
                    
                    </button>
            </Form>
        </div>
    )

}





































// import React from "react"
// import { useNavigate } from "react-router-dom"

// export default function Login() {
//     const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

//     function handleSubmit(e) {
//         e.preventDefault()
//         console.log(loginFormData)
//     }

//     function handleChange(e) {
//         const { name, value } = e.target
//         setLoginFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     return (
//         <div className="login-container">
//             <h1>Sign in to your account</h1>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input
//                     name="email"
//                     onChange={handleChange}
//                     type="email"
//                     placeholder="Email address"
//                     value={loginFormData.email}
//                 />
//                 <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     placeholder="Password"
//                     value={loginFormData.password}
//                 />
//                 <button>Log in</button>
//             </form>
//         </div>
//     )

// }