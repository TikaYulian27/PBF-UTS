// Step 5

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Product extends Component {
  render() {
    return (
      <div>
        <h2>Product</h2>
        <p></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Morbi augue tortor, laoreet et nulla et, venenatis tempor elit. 
          Nam quis nunc sapien. Integer gravida nisi eu erat semper eleifend. 
          Etiam ullamcorper metus non enim congue, et ornare nisi auctor. 
          Nullam at ullamcorper elit. Integer mattis vulputate pellentesque.</p>
   
<div class="card-deck">
  <div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi.</p>
    <a class="btn btn-unique">Button</a>
  </div>
  </div>

  <div class="card">
  <img class="card-img-top" src="https://majalah.ottencoffee.co.id/wp-content/uploads/2017/07/Copper_Dripper.jpeg"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi.</p>
    <a class="btn btn-unique">Button</a>
  </div>
  </div>

  <div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi.</p>
    <a class="btn btn-unique">Button</a>
  </div>
  </div>


</div>

</div>

    );
  }
}
 
export default Product;