import React, { Component } from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="col-12">
        <Header />
        <Body />
        <Footer />
      </div>
      
    )
  }
}
