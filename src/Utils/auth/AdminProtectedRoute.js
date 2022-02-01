import React from 'react'
import { Navigate , Route } from 'react-router-dom'

function AdminProtectedRoute({ component: Component, ...rest}) {
    const token = localStorage.getItem("adminToken");
    return (
       <Route 
        {...rest}
           render={(props) =>{
            if(token !== null){
                return(
                    <Component {...props} />
                )
            }
            else{
                return(
                    <Navigate to={{pathname:"/login", state: { from: props.location }}}/>
                )
            }
           }}
       />
    )
}

export default AdminProtectedRoute;
