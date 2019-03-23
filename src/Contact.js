import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Title } from "./Title";


function mapStateToProps(state) {
  return {
    footerHeight: state.footerHeight
  };
}


export class ConnectedContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(input, event) {
    if(input == "privacy") {
      this.setState({
        privacy: event.target.checked
      })
    } else {
      this.setState({
        [input]: event.target.value
      });
    }
  }


  handleSubmit(event) {
    event.preventDefault();

    if(!this.state.privacy) {
      alert("You must accept the Privacy Policy to submit your message.");
      return;
    }

    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => {
      axios.post(process.env.REACT_APP_API_URL + "/contact", {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          subject: this.state.subject,
          message: this.state.message,
          privacy: this.state.privacy
        }, {
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          },
          withCredentials: true
        })
        .then(response => {
          alert("The message has been sent.");
        })
        .catch(() => alert("There has been a problem sending your message. Please try again later."));
    })
    .catch(() => alert("There has been a problem sending your message. Please try again later."));
  }


  render() {
    return (
      <div className="contact_ctr _ctr_shell"  style={{ marginBottom: this.props.footerHeight }}>
        <Title page="Contact" />

        <div className="contact_ctr_content">
          <p>Please complete the form below to get in touch:</p>

          <form onSubmit={this.handleSubmit}>

            <div className="contact_ctr_form">
              <div className="_ele_row">
                <div>
                  <label>Name:</label>
                </div>

                <div>
                  <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this, "name")} />
                </div>
              </div>

              <div className="_ele_row">
                <div>
                  <label>Email:</label>
                </div>

                <div>
                  <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
                </div>
              </div>

              <div className="_ele_row">
                <div>
                  <label>Phone:</label>
                </div>

                <div>
                  <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this, "phone")} />
                </div>
              </div>

              <div className="_ele_row">
                <div>
                  <label>Subject:</label>
                </div>

                <div>
                  <input type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this, "subject")} />
                </div>
              </div>

              <div className="_ele_message">
                <label>Message:</label>
                <textarea value={this.state.message} onChange={this.handleChange.bind(this, "message")}></textarea>
              </div>

              <div className="_ele_check">
                <label>
                  <input type="checkbox" id="privacy" name="privacy" value={this.state.privacy} onChange={this.handleChange.bind(this, "privacy")} />&nbsp;I agree to the <Link to="/privacy">Privacy Policy</Link>.
                </label>
              </div>
            </div>

            <div className="contact_ctr_submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const Contact = connect(mapStateToProps, null)(ConnectedContact);
export default Contact;
