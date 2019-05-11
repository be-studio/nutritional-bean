import React, { Component } from "react";
import Mailchimp from "react-mailchimp-form";


export class NewsletterSignUp extends Component {
  render() {
    const year = new Date().getFullYear().toString();
    const yearString = year === "2019" ? "2019" : "2019-" + year;

    const styles = {
      sendingMsg: {
        color: "#57ab53"
      },
      successMsg: {
        color: "#57ab53"
      },
      duplicateMsg: {
        color: "#f00"
      },
      errorMsg: {
        color: "#f00"
      }
    };

    return (
      <div className="newsletter_ctr">
        <p>Newsletter Sign-up</p>

        <table className="newsletter_tbl">
          <tbody>
            <tr>
              <td>
                <Mailchimp action="https://facebook.us17.list-manage.com/subscribe/post?u=658695baea1965896de1eda7f&amp;id=1ff770049c" fields={ [{ name: "EMAIL", placeholder: "Email", type: "email", required: true }] } className="newsletter_frm" messages = { { sending: "Submitting...", success: "Thank you for subscribing!", error: "There has been a problem. Please try again later.", empty: "Email address is required.",
                    duplicate: "This email address has already been used to subscribe.", button: "OK" } } styles={styles} />
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
