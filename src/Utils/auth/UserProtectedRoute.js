import React from 'react'
import { Navigate , Route } from 'react-router'

function UserProtectedRoute({ component: Component, ...rest}) {
    const token = localStorage.getItem("userToken");
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
                    <Navigate  to={{pathname:"/login", state: { from: props.location }}}/>
                )
            }
           }}
       />
    )
}

export default UserProtectedRoute;
