import React, { Component } from "react";
 
class Buy extends Component {
  render() {
    return (
      <div>
        <h2>Buy</h2>
        <p>Browse our certified new/pre-owned cars backed by the Carvana guarantee.</p>
        <ol>
          <li>Sports Car</li>
            <ul>- $12,000</ul>
            <ul>- 25,000 miles</ul>
            <ul>- <b>Great </b>Price</ul>
          <li>SUV</li>
            <ul>- $18,000</ul>
            <ul>- 45,000 miles</ul>
            <ul>- <b>Good </b>Price</ul>
          <li>Truck</li>
            <ul>- $22,000</ul>
            <ul>- 78,000 miles</ul>
            <ul>- <b>Fair </b>Price</ul>
          <li>Sedan</li>
            <ul>- $24,000</ul>
            <ul>- 56,000 miles</ul>
            <ul>- <b>Fair </b>Price</ul>
          <li>Coupe</li>
            <ul>- $15,000</ul>
            <ul>- 25,000 miles</ul>
            <ul>- <b>Great </b>Price</ul>
        </ol>
      </div>
    );
  }
}
 
export default Buy;