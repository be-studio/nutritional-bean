import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import { About } from "./About";
import { FixedContent } from "./FixedContent";
import { Navigation } from "./Navigation";
import Footer from "./Footer";

export class Content extends Component {
  render() {
    return (
      <div className="content_ctr">
        <Navigation />
        <FixedContent />
        <Route exact path="/" component={Home} />
        <Route path="/about" component ={About} />
        <Footer />
      </div>
    );
  }
}
