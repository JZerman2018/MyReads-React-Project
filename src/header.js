import React from 'react'
//import { Link } from 'react-router-dom'

import headerbooks from "./images/headerbooks.svg"
import headersbooks from "./images/headersbooks.svg"

function Header(props) {
    return (
    <header>
        <div id="hero">
        <div className="headersbooks"><img src={headersbooks} alt="stack of books"/></div>
        <div className="name">
        <p className="title1">My Reads:</p>
        <p className="title2">A Book Tracking App</p>
        </div>
        <div className="headerbooks"><img src={headerbooks} alt="stack of books"/>
        </div>
        </div>
    </header>
    )
}

export default Header