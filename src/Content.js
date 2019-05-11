import React, { Component } from "react";
import { Route } from "react-router-dom";
import ReactCursorPosition from "react-cursor-position";

import { Home } from "./Home";
import { About } from "./About";
import { Services } from "./Services";
import { Nutrition } from "./Nutrition";
import { Blog } from "./Blog";
import { BlogArticle } from "./BlogArticle";
import { Contact } from "./Contact";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { FixedContent } from "./FixedContent";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export class Content extends Component {
  render() {
    return (
      <div className="content_ctr">
        <ReactCursorPosition>
          <Navigation />
        </ReactCursorPosition>
        <FixedContent />
        <Route exact path="/" component={Home} />
        <Route path="/about" component ={About} />
        <Route path="/services" component={Services} />
        <Route path="/nutrition" component={Nutrition} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/article/:permalink" component={BlogArticle} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Footer />
      </div>
    );
  }
}
