import React from "react";
import Header from "./Home_Comps/Header";
import NavigationBar from "./Home_Comps/NavigationBar";
import Footer from "./Home_Comps/Footer";
import Products from "./Home_Comps/Products";

function Home (){
    return (
        <div>
            <NavigationBar/>
            <Header/>
            <Products/>
            <Footer/>
         </div>
    )
}
export default Home;