/**
 * Created by David on 2/7/2017.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = (props) => {
    return(
       <div className="top-bar">
           <div className="top-bar-left">
               <ul className="menu">
                   <li className="menu-text">
                       React Timer
                   </li>
                   <li>
                       <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                   </li>
                   <li>
                       <Link to="/" activeClassName="active-link">Counter</Link>
                   </li>
               </ul>
           </div>
           <div className="top-bar-right">
               <ul className="menu">
                   <il className="menu-text">
                       Created By <a>David Manela</a>
                   </il>
               </ul>
           </div>
       </div>
    )
}

export default Nav;