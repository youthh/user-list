import React from 'react';
import {NavLink} from "react-router-dom";
import './headerStyle.css'
const Header = () => {
    return (
        <header className="header">
           <div className="container">
               <div className="header_inner">
                   <div>
                       <h1>LogoProject</h1>
                   </div>
                 <div>
                     <nav>
                         <ul className="header_nav">
                             <li className="li_nav">
                                 <NavLink className="li_link" to={"/"}>
                                     Home
                                 </NavLink>
                             </li>
                             <li className="li_nav">
                                 <NavLink className="li_link" to={"Todo"} >
                                     Todo
                                 </NavLink>
                             </li>
                         </ul>
                     </nav>
                 </div>
               </div>
           </div>
        </header>
    );
};

export default Header;