import React, {useState, Component} from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Products from "./Products";

class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data: null,
  //   };
  // }

  componentDidMount(){
    fetch("http://localhost:3000/testAPI")
      .then((res) => res.json())
      .then((data) => console.log("This is your data", data));
  }


    
  render(){
    return(
        <div className="App">
            <NavigationBar/>
            <Header/>
            <Products/>
            <Footer/>
        </div>
    )
  }
}



export default App;