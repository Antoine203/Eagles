import React from "react";

function NavigationBar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navigationBackground">
                <a className="navbar-brand companyName" href="#">Eagles</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link navigationText" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navigationText" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Product
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item navigationText" href="#productSection">Home Systems</a>
                            </div>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link navigationText" href="#" tabindex="-1" aria-disabled="true">Why Us?</a>
                        </li>
                    </ul>
                    <div>
                        <a className="navigationText supportButton" href="#">Support</a>
                        <span className="navigationText divider">|</span>
                        <a className="navigationText loginButton" href="#">Login</a>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;