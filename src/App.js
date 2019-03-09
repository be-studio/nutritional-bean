import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import { Content } from "./Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <Router basename={"/stage"}>
            <Content />
          </Router>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
