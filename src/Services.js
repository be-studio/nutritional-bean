import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SanitizedHTML from "react-sanitized-html";

import { Title } from "./Title";
import { LinkArrow } from "./LinkArrow";

export class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }


  componentDidMount() {
    window.scroll(0, 0);

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
          <div className="services_ctr_block">
            <div>
              <div>
                <h2>
                  One-to-One<br />
                  Nutritional Therapy<br />
                  Consultation
                </h2>

                <SanitizedHTML className="_txt_green-mono" html={this.state.content.consult_summary} />

                <img className="services_img_consult" src="/assets/tnb-one-to-one.jpg" alt="" />
              </div>

            </div>

            <div>
              <SanitizedHTML html={this.state.content.consult_para} />

              <div className="_spc _dim_20"></div>

              <h3>
                <SanitizedHTML html={this.state.content.consult_option1_title} />
              </h3>

              <p className="_txt_green-mono">
                <SanitizedHTML html={this.state.content.consult_option1_summary} />
              </p>

              <p>
                <SanitizedHTML html={this.state.content.consult_option1_content} />
              </p>

              <div className="_spc _dim_20"></div>

              <h3>
                <SanitizedHTML html={this.state.content.consult_option2_title} />
              </h3>

              <p className="_txt_green-mono">
                <SanitizedHTML html={this.state.content.consult_option2_summary} />
              </p>

              <p>
                <SanitizedHTML html={this.state.content.consult_option2_content} />
              </p>

              <div className="_spc _dim_20"></div>

              <h3>
                <SanitizedHTML html={this.state.content.consult_option3_title} />
              </h3>

              <p className="_txt_green-mono">
                <SanitizedHTML html={this.state.content.consult_option3_summary} />
              </p>

              <p>
                <SanitizedHTML html={this.state.content.consult_option3_content} />
              </p>

              <div className="_spc _dim_20"></div>

              <p>
                <SanitizedHTML html={this.state.content.consult_end_note} />
              </p>

              <p>
                <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
              </p>
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
