import React from "react";
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link to="#cybernotes" className="link">
                        Cyber Security
                    </Link>
                </li>
                <li>
                    <Link to="#javanotes" className="link">
                        Javascript
                    </Link>
                </li>
                <li>
                    <Link to="#reactnotes" className="link">
                        React
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar