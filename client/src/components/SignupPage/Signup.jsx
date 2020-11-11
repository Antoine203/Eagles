import React from "react";
import {Link} from "react-router-dom";


function Signup(){
    return(
        <div>
            <div class="card" style={{width: '18rem'}}>
                <span>
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                </span>
                <input type="text" placeholder="Mobile number or email"/>
                <input type="password" placeholder="Password"/>
                <p>Birthday</p>

                <Link to={"/"} className="btn btn-md btn-success" style={{color: "white"}}>Sign Up</Link>
            </div>
        </div>
    );
}

export default Signup;