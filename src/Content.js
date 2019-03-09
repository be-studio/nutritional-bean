import React, { Component } from "react";
import { Route } from "react-router-dom";

import { Home } from "./Home";
import { FixedContent } from "./FixedContent";
import { Navigation } from "./Navigation";

export class Content extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="content_ctr">
        <Navigation />
        <FixedContent />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
