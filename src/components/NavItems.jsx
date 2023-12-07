import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItems({ title, link }) {
    return (
        <NavLink
            to={link}
            style={({ isActive }) => ({
                color: isActive ? 'rgb(248 113 113)' : 'white'
            })}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 p-2 rounded-sm  hover:bg-blue-400 hover:text-black transition-colors hover:rounded-md">
            {title}
        </NavLink>
    )
}

export default NavItems
