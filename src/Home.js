import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ticker from "react-ticker";
import SanitizedHTML from "react-sanitized-html";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import ScrollAnimation from 'react-animate-on-scroll';

import { Title } from "./Title";
import { LinkArrow } from "./LinkArrow";
import { Loader } from "./Loader";


/**
 * THE NUTRITIONAL BEAN
 * BE Web Application
 *
 * @author Birute M., Eric L.
 * @copyright 2019, BE
 * @see https://itsbe.studio
 * @version 1.x
 */

/**
 * HOME PAGE COMPONENT
 */
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marqueeItems: null
    };
  }


  componentDidMount() {
    window.scroll(0, 0);

    this.getMarqueeItems();
  }


  getMarqueeItems() {
    const errorMsg = "There has been a problem retrieving certain data required for the home page. Please try again later.";

    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => {
      axios.get(process.env.REACT_APP_API_URL + "/marquee", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          marqueeItems: response.data
        });
        console.log(this.state.marqueeItems);
      })
      .catch(() => alert(errorMsg))
    })
    .catch(() => alert(errorMsg));
  }


  render() {
    if(!this.state.marqueeItems) {
      return (
        <Loader />
      );
    }

    let marqueeMarkup = "<span class='home_lst_marquee'>";

    this.state.marqueeItems.forEach(item => {
      if(item.link) {
        marqueeMarkup += `<span class="home_txt_marquee-item"><a href=${item.url} target="_blank" rel="noopener noreferrer" title=${item.text}>${item.text}</a></span>`;
      } else {
        marqueeMarkup += `<span class="home_txt_marquee-item">${item.text}</span>`;
      }
    });

    marqueeMarkup += "</span>";

    //noinspection HtmlDeprecatedTag
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
            <Scene triggerElement=".home_ctr_mobile-poster" triggerHook="onLeave" offset={-0.05} duration={2000}>
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
              <ScrollAnimation animateIn="fadeInDown">
                <span className="home_txt_intro-title">
                  <h1>Hello! I'm Bean,</h1>
                  <img src="/assets/bean.svg" alt="" />
                </span>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInDown">
                <p className="home_txt_intro">
                  a registered Nutritional Therapist, wife, mother and a Leith’s trained cook. I work with children and adults to restore health and wellbeing. My personal and primary mission is to educate, motivate and support you to make diet and lifestyle changes that work for you.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInDown">
                <p>
                  <Link to="/about" title="Keep reading">Keep reading<LinkArrow /></Link>
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
            <a className="_mod_no-style" href="https://bant.org.uk" target="_blank" rel="noopener noreferrer" title="Member of BANT">
              <img src="/assets/bant-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/bant-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/bant-logo.gif")} alt="Member of BANT" />
            </a>

            <a className="_mod_no-style" href="https://www.cnhc.org.uk" target="_blank" rel="noopener noreferrer" title="Complementary and Natural Healthcare Council">
              <img src="/assets/cnhc-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/cnhc-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/cnhc-logo.gif")} alt="Complementary and Natural Healthcare Council" />
            </a>
          </div>
        </div>

        <div className="home_ctr_parallax">
          <Controller>
            <Scene triggerHook="onEnter" duration="150%">
              <Timeline wrapper={<div className="home_ctr_second-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <img src="/assets/tnb-homepage-herbs.jpg" alt="" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="home_ctr_parallax-mobile">
          <Controller>
            <Scene triggerHook="onEnter" duration="250%">
              <Timeline wrapper={<div className="home_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <div className="home_ctr_parallax-image-mobile"></div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="home_ctr_marquee">
          <Ticker mode="chain" height={23}>
            {() => (
              <SanitizedHTML allowedAttributes={{ "ul": ["class"], "a": ["href", "target", "rel", "title"], "span": ["class"] }} allowedTags={["a", "div", "ul", "li", "p", "span"]} html={marqueeMarkup} />
            )}
          </Ticker>
        </div>

        <div className="home_ctr_bottom-panel">
          <div>
            <div>
              <img src="/assets/tnb-journey.jpg" alt="" />
            </div>

            <div>
              <ScrollAnimation animateIn="fadeInDown">
                <p>
                  True healing is<br />
                  a journey &mdash;<br />
                  Let me guide you!
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInDown" offset={20}>
                <Link to="/contact" title="Get in touch">Get in touch<LinkArrow /></Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
