import React from "react";
import {Link} from "react-router-dom";



function Login(){
    return(
        <div>
            <h1>Eagles</h1>
            <div class="card" style={{width: '18rem'}}>
                <input type="text" placeholder="Email or Phone Number"/>
                <input type="password" placeholder="Password"/>
                <Link to={"/"} className="btn btn-lg btn-primary" style={{color: "white"}}>Log In</Link>
                <hr/>
                <Link to={"/signup"} className="btn btn-md btn-success" style={{color: "white"}}>Create New Account</Link>
            </div>
        </div>
    )
}
export default Login;