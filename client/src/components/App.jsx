import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./HomePage/Home";
import Login from "./LoginPage/Login";
import Products from "./ProductsPage/Products";
import Signup from "./SignupPage/Signup";
import Confirmation from "./ConfirmationPage/Confirmation";

function App(){

  return(
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/confirmation" component={Confirmation} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;