import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";

export class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="home_ctr">
        <div className="home_ctr_poster"></div>

        <div className="home_ctr_top-panel">
          <div>
            <div>
              <span className="home_txt_intro-title">
                <h1>Hello! I'm Bean,</h1>
                <img src="/assets/bean.svg" alt="" />
              </span>

              <p className="home_txt_intro">
                a registered Nutritional Therapist, Health Coach, wife and mother. I work with adults and children to restore health and wellbeing. My personal/primary mission is to educate, motivate and support YOU to make diet and lifestyle changes so that work for YOU.
              </p>

              <p>
                <a href="#" title="Keep reading">Keep reading&nbsp;&#8594;</a>
              </p>
            </div>

            <div className="home_ctr_accreditations">

            </div>

            <div>
              <img src="assets/harriet-black-white.jpg" onMouseOver={e => (e.currentTarget.src = "assets/harriet.jpg")} onMouseOut={e => (e.currentTarget.src = "assets/harriet-black-white.jpg")} alt="Bean" />
            </div>
          </div>
        </div>

        <div className="home_ctr_second-image"></div>

        <div className="home_ctr_marquee"></div>

        <div className="home_ctr_bottom-panel">
          <div>
            <div>
              <img src="/assets/tnb-journey.jpg" alt="" />
            </div>

            <div>
              <p>
                True healing is<br />
                a journey &mdash;<br />
                Let me guide you!
              </p>

              <p>
                <img className="home_img_bean" src="/assets/bean.svg" />
              </p>

              <a href="#" title="Get in touch">Get in touch&nbsp;&#8594;</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
