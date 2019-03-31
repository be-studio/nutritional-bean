import React from "react";
import { FooterMenu } from "./FooterMenu";
import { NewsletterSignUp } from "./NewsletterSignUp";


export function Footer() {
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
