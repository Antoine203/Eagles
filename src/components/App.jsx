import React, {useState} from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Products from "./Products";


function App(){
    return(
        <div>
            <NavigationBar/>
            <Header/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default App;