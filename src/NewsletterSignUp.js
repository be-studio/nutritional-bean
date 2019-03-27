import React, { Component } from "react";


export class NewsletterSignUp extends Component {
  render() {
    const year = new Date().getFullYear().toString();
    const yearString = year === "2019" ? "2019" : "2019-" + year;

    return (
      <div className="newsletter_ctr">
        <p>Newsletter Sign-up</p>

        <table className="newsletter_tbl">
          <tbody>
            <tr>
              <td width="80%">
                <form>
                  <input type="text" id="email" name="email" placeholder="Email" />
                </form>
              </td>

              <td>
                <button type="submit">OK&nbsp;<span className="_txt_bean">a</span></button>
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
