import React from "react";

function NavigationBar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navigationBackground">
                <a class="navbar-brand companyName" href="#">Eagles</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link navigationText" href="#">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle navigationText" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Product
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item navigationText" href="#productSection">Home Systems</a>
                            </div>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link navigationText" href="#" tabindex="-1" aria-disabled="true">Why Us?</a>
                        </li>
                    </ul>
                    <div>
                        <a class="navigationText supportButton" href="#">Support</a>
                        <span class="navigationText divider">|</span>
                        <a class="navigationText loginButton" href="#">Login</a>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;