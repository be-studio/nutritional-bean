import React, { Component } from "react";
import axios from "axios";
import SanitizedHTML from "react-sanitized-html";

import { Title } from "./Title";


export class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }


  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => {
      axios.get(process.env.REACT_APP_API_URL + "/content/services", {
        withCredentials: true
      })
      .then(response => {
        const contentItems = {};

        response.data.forEach(item => {
          contentItems[item.key] = item.content
        });

        this.setState({
          content: contentItems
        });
      })
      .catch(() => alert("There has been a problem retrieving content for this page. Please try again later."))
    })
    .catch(() => alert("There has been a problem retrieving content for this page. Please try again later."))
  }





  render() {
    if(this.state.content) {
      return (
        <div className="services_ctr _ctr_shell">
        <Title page="Services" />

        <div className="services_ctr_content">
          <div className="services_ctr_consult">
            <div>
              <div>
                <h2>
                  One-to-One<br />
                  Nutritional Therapy<br />
                  Consultation
                </h2>

                <SanitizedHTML className="_txt_green-mono" html={this.state.content.consult_summary} />
              </div>

            </div>

            <div>
              <SanitizedHTML html={this.state.content.consult_para} />
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return (<div></div>);
    }
  }
}
