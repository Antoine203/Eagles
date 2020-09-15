import React from "react";


function Header(props){
    return(
        <div>
           <div className={props.background}>
                <div className="messageSection">
                    <h1>{props.title}</h1>
                    <p className="headerBody">{props.body}</p>
                    <form class="buttonForm" action="index.html" method="get">
                        <button class="btn-primary btn-lg" type="submit">Learn More</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;