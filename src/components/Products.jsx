import React from "react";

function Products(){
    return(
        <div>
            <div class="productsSection" id="productSection">
                <div class="container">
                    <div class="row">
                        <div class="card col-md card1 cards" style={{width: "10rem;"}}>
                            <img src="./images/HomeSystem.jpeg" class="card-img-top" alt="..."></img>
                            <div class="card-body cardBody">
                                <h5 class="card-title">Alarm System</h5>
                                <p class="card-text">Protect your loveed ones with our home alarm system.</p>
                                <a href="#" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>

                        <div class="card col-md cards" style={{width: "10rem;"}}>
                            <img src="./images/SmartHome.jpeg" class="card-img-top middleCardImg" alt="..."></img>
                            <div class="card-body cardBody">
                                <h5 class="card-title">Smart System</h5>
                                <p class="card-text">Escalate your home with our state-of-the-art smart home system.</p>
                                <a href="#" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;