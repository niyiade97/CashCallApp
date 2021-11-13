import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <Link to="/fund-request" className="flex justify-start items-center text-color5 my-8 hover:text-color2 focus:text-color2">
            <i className="text-2xl">{props.icon}</i>
            <p className="font-bold text-sm pl-5">{props.text}</p>
        </Link>
    )
}

export default Nav
