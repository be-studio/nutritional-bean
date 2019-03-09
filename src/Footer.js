import React, { Component } from "react";
import { FooterMenu } from "./FooterMenu";
import { NewsletterSignUp } from "./NewsletterSignUp";


export class Footer extends Component {
  render() {
    return (
      <div className="footer_ctr">
        <div>
          <div>
            <FooterMenu />
          </div>

          <div>
            <NewsletterSignUp />
          </div>
        </div>
      </div>
    );
  }
}
