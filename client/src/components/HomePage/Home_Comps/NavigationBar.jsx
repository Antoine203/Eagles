import React from "react";
import {Link} from "react-router-dom";

function NavigationBar(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navigationBackground">
                <a className="navbar-brand companyName" href="#">Eagles</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navigationText" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Product
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item navigationText" href="#productSection">Home Systems</a>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <a className="navigationText supportButton" href="#">Support</a>
                        <span className="navigationText divider">|</span>

                        <Link to={'/login'} className="navigationText loginButton">Login</Link>
                           
                        
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;