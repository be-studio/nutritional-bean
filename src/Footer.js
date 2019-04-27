import React from "react";
import { FooterMenu } from "./FooterMenu";
import { NewsletterSignUp } from "./NewsletterSignUp";


export function Footer() {
  return (
    <div className="footer_ctr">
      <div className="footer_ctr_top">
        <div>
          <div>
            <FooterMenu />
          </div>

          <div>
            <NewsletterSignUp />
          </div>
        </div>
      </div>


      <div className="footer_ctr_accreditations">
        <ul>
          <li>
            Photos: <a className="_mod_no-style" href="https://www.instagram.com/hananoguchi" target="_blank" rel="noopener noreferrer" title="Hana Noguchi">Hana Noguchi</a>
          </li>

          <li>
            Illustrations: <a className="_mod_no-style" href="https://www.instagram.com/chamarrant" target="_blank" rel="noopener noreferrer" title="Maureen Valfort">Maureen Valfort</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
