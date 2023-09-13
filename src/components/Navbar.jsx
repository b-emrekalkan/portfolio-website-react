import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation();

    //! If there is a change in the "location" variable, set "setExpandNavbar" to false and toggle is turned off 👇
    //? "useLocation" takes the current browser position, while "useEffect" controls the behavior of the navigation bar when the current position changes. This code allows the user to toggle the navigation bar on and off, and it is automatically closed when the position changes.
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        //! If "expandNavbar" is true, let "id=open". If false, let "id=close". The styles for these ids are in the App.css file. 👇
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            {/* 👇 Button that will appear when the page is minimized. 👇 */}
            <div className='toggleButton'>
                <button onClick={() => {
                    //! When clicked, make it false if "expandNavbar" is true, make it true if "expandNavbar" false 👇
                    setExpandNavbar((prev) => !prev)
                }}>
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar