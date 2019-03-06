import React, { Component } from "react";
import { Route } from "react-router-dom";

import { Home } from "./Home";

export class Content extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
