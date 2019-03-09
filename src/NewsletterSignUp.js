import React, { Component } from "react";


export class NewsletterSignUp extends Component {
  render() {
    const year = new Date().getFullYear();
    const yearString = year == "2019" ? "2019" : "2019-" + year;

    return (
      <div className="newsletter_ctr">
        <p>Newsletter Sign-up</p>

        <table>
          <tr>
            <td width="80%">
              <form>
                <input type="text" id="email" name="email" placeholder="Email" />
              </form>
            </td>

            <td>
              <button type="submit">OK&nbsp;&#8594;</button>
            </td>
          </tr>
        </table>



        <div className="newsletter_ele_line"></div>

        <p>{yearString} &copy; All Rights Reserved.</p>
      </div>
    );
  }
}
