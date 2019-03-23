import React, { Component } from "react";
import axios from "axios";

import { Title } from "./Title";


export class Contact extends Component {
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
    console.log(this.state);
    console.log(process.env.REACT_APP_API_URL);

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
      <div className="contact_ctr _ctr_shell">
        <Title page="Contact" />

        <div className="contact_ctr_content">
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this, "name")} />

            <label>Email Address</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, "email")} />

            <label>Phone Number</label>
            <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this, "phone")} />

            <label>Subject</label>
            <input type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this, "subject")} />

            <label>Message</label>
            <textarea value={this.state.message} onChange={this.handleChange.bind(this, "message")}></textarea>

            <input type="checkbox" id="privacy" name="privacy" value={this.state.privacy} onChange={this.handleChange.bind(this, "privacy")} />
            <label>Privacy</label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
