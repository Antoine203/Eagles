import React from "react";
import {Link} from "react-router-dom";

function Products(){
    return (
        <div>
            <h1>Products Page</h1>
            <Link to="/products/confirmation" className="btn btn-md btn-success">Buy</Link>
        </div>
    );
}

export default Products;