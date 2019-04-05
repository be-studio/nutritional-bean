import React, { Component } from "react";

import { LinkArrow } from "./LinkArrow";


export class NewsletterSignUp extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    alert('This feature is not available yet. Please check back.');
  }


  render() {
    const year = new Date().getFullYear().toString();
    const yearString = year === "2019" ? "2019" : "2019-" + year;

    return (
      <div className="newsletter_ctr">
        <p>Newsletter Sign-up</p>

        <table className="newsletter_tbl">
          <tbody>
            <tr>
              <td>
                <form>
                  <input type="text" id="email" name="email" placeholder="Email" />
                </form>
              </td>

              <td>
                <button type="submit" onClick={this.handleSubmit}>OK<LinkArrow /></button>
              </td>
            </tr>
          </tbody>
        </table>



        <div className="newsletter_ele_line"></div>

        <p>{yearString} <span className="newsletter_txt_copyright">&copy;</span> All Rights Reserved.</p>
      </div>
    );
  }
}
