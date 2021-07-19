import React from 'react' 
import {Link } from 'react-router-dom'

const Header  = ()  =>{
    return(
        <header>
            <div className="header-section">
               <ul>
                   <li>
                       <Link to="/" >Signup</Link>
                   </li>
               </ul>
            </div>
        </header>

    )
}



export default Header;