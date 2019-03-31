import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SanitizedHTML from "react-sanitized-html";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

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
        <div className="services_ctr">
        <Title page="Services" />

        <div className="services_ctr_panel">
          <div className="services_ctr_content">
            <div className="services_ctr_block">
              <div>
                <div>
                  <img className="services_img_consult-mobile" src="/assets/tnb-one-to-one.jpg" alt="" />

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
                  A. <SanitizedHTML className="_mod_inline" html={this.state.content.consult_option1_title} />
                </h3>

                <SanitizedHTML className="_txt_green-mono" html={this.state.content.consult_option1_summary} />

                <SanitizedHTML html={this.state.content.consult_option1_content} />

                <div className="_spc _dim_20"></div>

                <h3>
                  B. <SanitizedHTML className="_mod_inline" html={this.state.content.consult_option2_title} />
                </h3>

                <SanitizedHTML className="_txt_green-mono" html={this.state.content.consult_option2_summary} />

                <SanitizedHTML html={this.state.content.consult_option2_content} />

                <div className="_spc _dim_20"></div>

                <h3>
                  C. <SanitizedHTML className="_mod_inline" html={this.state.content.consult_option3_title} />
                </h3>

                <SanitizedHTML className="_txt_green-mono" html={this.state.content.consult_option3_summary} />

                <SanitizedHTML html={this.state.content.consult_option3_content} />

                <div className="_spc _dim_20"></div>

                <SanitizedHTML html={this.state.content.consult_end_note} />

                <div className="_spc _dim_20"></div>

                <p>
                  <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services_ctr_parallax" id="parallax1">
          <Controller>
            <Scene triggerHook="onEnter" duration="120%">
              <Timeline wrapper={<div className="services_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 10 }}>
                  <img src="/assets/tnb-services.jpg" alt="" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>

          <Controller>
            <Scene triggerElement="#parallax1" triggerHook="onLeave" offset={100} duration={1200}>
              {(progress) => (
                <Tween to={{ css: { bottom: "100px" } }} totalProgress={progress} paused>
                  <div className="services_img_plan">
                    <img src="/assets/tnb-services-1.png" alt="" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="services_ctr_parallax-mobile">
          <Controller>
            <Scene triggerHook="onEnter" duration="250%">
              <Timeline wrapper={<div className="services_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <div className="services_ctr_parallax-image-mobile parallax1"></div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="services_ctr_panel _mod_pad-top">
          <div className="services_ctr_content">
            <div className="services_ctr_block">
              <div>
                <div>
                  <h2>
                    Talks
                  </h2>

                  <SanitizedHTML className="_txt_green-mono" html={this.state.content.talks_summary} />
                </div>
              </div>

              <div>
                <SanitizedHTML html={this.state.content.talks_content} />

                <div className="_spc _dim_20"></div>

                <p>
                  <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
                </p>
              </div>


            </div>

            <div className="_spc _dim_100 _dim_mob_50"></div>

            <div className="services_ctr_block">
              <div>
                <div>
                  <h2>
                    Workshops
                  </h2>

                  <SanitizedHTML className="_txt_green-mono" html={this.state.content.workshops_summary} />

                  <img className="services_img_workshops" src="/assets/tnb-workshops.jpg" alt="" />
                </div>
              </div>

              <div>
                <SanitizedHTML html={this.state.content.workshops_content} />

                <div className="_spc _dim_20"></div>

                <p>
                  <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
                </p>
              </div>
            </div>

            <div className="_spc _dim_100 _dim_mob_50"></div>

            <div className="services_ctr_block">
              <div>
                <div>
                  <h2>
                    Online Group<br />
                    Programmes
                  </h2>

                  <SanitizedHTML className="_txt_green-mono" html={this.state.content.online_grps_summary} />
                </div>
              </div>

              <div>
                <SanitizedHTML html={this.state.content.online_grps_content} />

                <div className="_spc _dim_20"></div>

                <p>
                  <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services_ctr_parallax" id="parallax2">
          <Controller>
            <Scene triggerHook="onEnter" duration="120%">
              <Timeline wrapper={<div className="services_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <img src="/assets/tnb-services-2.jpg" alt="" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>

          <Controller>
            <Scene triggerElement="#parallax2" triggerHook="onLeave" offset={100} duration={1200}>
              {(progress) => (
                <Tween to={{ css: { bottom: "100px" } }} totalProgress={progress} paused>
                  <div className="services_img_bag">
                    <img src="/assets/tnb-services-2.png" alt="" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="services_ctr_parallax-mobile">
          <Controller>
            <Scene triggerHook="onEnter" duration="250%">
              <Timeline wrapper={<div className="services_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <div className="services_ctr_parallax-image-mobile parallax2"></div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="services_ctr_panel _mod_pad-top">
          <div className="services_ctr_content">
            <div className="services_ctr_block">
              <div>
                <div>
                  <h2>
                    Diet MOT
                  </h2>

                  <SanitizedHTML className="_txt_green-mono" html={this.state.content.diet_mot_summary} />
                </div>
              </div>

              <div>
                <SanitizedHTML html={this.state.content.diet_mot_content} />

                <div className="_spc _dim_20"></div>

                <p>
                  <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
                </p>
              </div>
            </div>

            <div className="_spc _dim_100 _dim_mob_50"></div>

            <div className="services_ctr_block">
              <div>
                <div>
                  <h2>
                    The Family<br />
                    Nutrition MOT
                  </h2>

                  <SanitizedHTML className="_txt_green-mono" html={this.state.content.family_mot_summary} />

                  <img className="services_img_family" src="/assets/tnb-family.jpg" alt="" />
                </div>
              </div>

              <div>
                <SanitizedHTML html={this.state.content.family_mot_content} />

                <div className="_spc _dim_20"></div>

                <p>
                  <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services_ctr_parallax">
          <Controller>
            <Scene triggerHook="onEnter" duration="150%">
              <Timeline wrapper={<div className="services_ctr_parallax-image-bottom" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 10 }}>
                  <img src="/assets/tnb-services-3.jpg" alt="" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="services_ctr_parallax-mobile">
          <Controller>
            <Scene triggerHook="onEnter" duration="250%">
              <Timeline wrapper={<div className="services_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <div className="services_ctr_parallax-image-mobile parallax3"></div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>
      </div>
      );
    } else {
      return (<div className="_ctr_blank"></div>);
    }
  }
}
