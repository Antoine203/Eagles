import React, {useState} from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";


function App(){
    const classNames = ["Globe", "Guard"];
    const title = ["Nation Wide Technology", "Elite Units"];
    const paragraph = ["Our technology will keep you and your loved ones protected.", "Our Elite teams will keep you and your goods protected"]

    const [headerBackground, setHeaderBackground] = useState(classNames[0]);
    const [headerText, setHeaderText] = useState(title[0]);
    const [headerBody, setHeaderBody] = useState(paragraph[0])

    var position = 1;
    var start = false;

    function handleHeaderChange(){
        setHeaderBackground(classNames[position]);
        setHeaderText(title[position]);
        setHeaderBody(paragraph[position]);
        setTimeout(resetChange, 50000);
    }

    function resetChange(){
        position = 0;
        setHeaderBackground(classNames[position]);
        setHeaderText(title[position]);
        setHeaderBody(paragraph[position]);
    }

    if(start === false){
        setTimeout(handleHeaderChange, 50000);
        start = true;
    }
    
    return(
        <div>
            <NavigationBar/>
            <Header
                background = {headerBackground}
                title={headerText}
                body={headerBody}
            />
            <Footer/>
        </div>
    )
}

export default App;