import React, { Component } from "react";
import axios from "axios";


export class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consultSummary: "",
      consultParagraph: ""
    };
  }


  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => {
      axios.get(process.env.REACT_APP_API_URL + "/content/consult", {
        withCredentials: true
      })
      .then(response => {
        console.log(response);
      })
      .catch(() => alert("There has been a problem retrieving content for this page. Please try again later."))
    })
    .catch(() => alert("There has been a problem retrieving content for this page. Please try again later."))
  }


  render() {
    return (
      <div className="services_ctr">
        Services
      </div>
    );
  }
}
