import React, { Component } from "react";
import { connect } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import ScrollAnimation from 'react-animate-on-scroll';

import { Title } from "./Title";

export function mapStateToProps(state) {
  return {
    footerHeight: state.footerHeight
  };
}


export class ConnectedHome extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const noHref = "#";

    return (
      <div className="home_ctr">
        <Title absolute />

        <div className="home_ctr_poster">
          <Controller>
            <Scene triggerElement=".home_ctr_poster" triggerHook="onLeave" offset={100} duration={1200}>
              {(progress) => (
                <Tween to={{ css: { bottom: "100px" } }} totalProgress={progress} paused>
                  <div className="home_img_bacteria">
                    <img src="/assets/tnb_bacteria.png" alt="" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="home_ctr_anim">
          <Controller>
            <Scene triggerElement=".home_ctr_mobile-poster" triggerHook="onLeave" offset={-0.05} duration={500}>
              {(progress) => (
                <Tween to={{ css: { position: 'relative', height: '200px' } }} ease="Strong.easeOut" totalProgress={progress} paused>
                  <div className="home_ctr_mobile-poster"></div>
                </Tween>
              )}
            </Scene>



            <Scene triggerElement=".home_ctr_anim" triggerHook="onLeave" duration={300}>
              {(progress) => (
                <Tween to={{ css: { top: "50px" } }} totalProgress={progress} paused>
                  <div className="home_img_bacteria-mobile">
                    <img src="/assets/tnb_bacteria.png" alt="" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="home_ctr_top-panel">
          <div className="home_ctr_top-panel-content">
            <div>
              <ScrollAnimation animateIn="fadeInUp">
                <span className="home_txt_intro-title">
                  <h1>Hello! I'm Bean,</h1>
                  <img src="/assets/bean.svg" alt="" />
                </span>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp">
                <p className="home_txt_intro">
                  a registered Nutritional Therapist, Health Coach, wife and mother. I work with adults and children to restore health and wellbeing. My personal/primary mission is to educate, motivate and support YOU to make diet and lifestyle changes so that work for YOU.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp">
                <p>
                  <a href={noHref} title="Keep reading">Keep reading&nbsp;&#8594;</a>
                </p>
              </ScrollAnimation>

            </div>

            <div>
              <span className="home_img_harriet">
                <img src="/assets/harriet-black-white.jpg" onMouseOver={e => (e.currentTarget.src = "/assets/harriet.jpg")} onMouseOut={e => (e.currentTarget.src = "/assets/harriet-black-white.jpg")} alt="Bean" />
              </span>

              <span className="home_img_harriet-mobile">
                <img src="/assets/harriet-mobile-black-white.jpg" onMouseOver={e => (e.currentTarget.src = "/assets/harriet-mobile.jpg")} onMouseOut={e => (e.currentTarget.src = "/assets/harriet-mobile-black-white.jpg")} alt="Bean" />
              </span>
            </div>
          </div>

          <div className="home_ctr_accreditations">
            <img src="/assets/bant-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/bant-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/bant-logo.gif")} alt="Member of BANT" />
            <img src="/assets/cnhc-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/cnhc-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/cnhc-logo.gif")} alt="Complementary and Natural Healthcare Council" />
          </div>
        </div>

        <div className="home_ctr_parallax">
          <Controller>
            <Scene triggerHook="onEnter" duration="150%">
              <Timeline wrapper={<div className="home_ctr_second-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <img src="/assets/tnb-homepage-herbs.jpg" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="home_ctr_second-image-mobile"></div>

        <div className="home_ctr_marquee"></div>

        <div className="home_ctr_bottom-panel" style={{ "marginBottom": this.props.footerHeight }}>
          <div>
            <div>
              <img src="/assets/tnb-journey.jpg" alt="" />
            </div>

            <div>
              <ScrollAnimation animateIn="fadeInUp">
                <p>
                  True healing is<br />
                  a journey &mdash;<br />
                  Let me guide you!
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" offset={20}>
                <a href={noHref} title="Get in touch">Get in touch&nbsp;&#8594;</a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Home = connect(mapStateToProps, null)(ConnectedHome);
export default Home;
