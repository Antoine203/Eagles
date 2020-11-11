import React from "react";
import Icon from "./Icon";
function Footer(){
    var date = new Date();
    return(
        <div class="footerContainer">
            <p class="footer">Copyright <Icon/> {date.getFullYear()}, Galaxy Technologies.</p>
        </div>
    )
}

export default Footer;