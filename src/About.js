import React, { Component } from "react";
import { connect } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import ScrollAnimation from 'react-animate-on-scroll';

import { Title } from "./Title";


function mapStateToProps(state) {
  return {
    footerHeight: state.footerHeight
  };
}


export class ConnectedAbout extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }


  render() {
    return (
      <div className="about_ctr _ctr_shell" style={{ marginBottom: this.props.footerHeight }}>
        <div className="about_ctr_desktop">
          <Title page="About Harriet" />
        </div>

        <div className="about_ctr_mobile">
          <Controller>
            <Scene triggerElement=".about_ctr_harriet" triggerHook="onLeave" offset={-0.05} duration={500}>
              {(progress) => (
                <Tween to={{ css: { position: 'relative', height: '200px' } }} ease="Strong.easeOut" totalProgress={progress} paused>
                  <div className="about_ctr_harriet">
                    <Title absolute page="About Harriet" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="about_ctr_content">
          <div>
            <img className="about_img_harriet" src="/assets/tnb-about.jpg" alt="Harriet" />

            <div className="about_ctr_accreditations">
              <img src="/assets/bant-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/bant-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/bant-logo.gif")} alt="Member of BANT" />
              <img src="/assets/cnhc-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/cnhc-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/cnhc-logo.gif")} alt="Complementary and Natural Healthcare Council" />
            </div>
          </div>

          <div>
            <ScrollAnimation animateIn="fadeInUp">
              <p className="_txt_intro">I AM HARRIET BINDLOSS, A FULLY QUALIFIED NUTRITIONAL THERAPIST PRACTISING IN STOKE NEWINGTON, SOMERSET AND CLAPHAM, LONDON.</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp">
              <p>I use a robust but efficient method for assessing your health. Based on Functional Medicine. Science, research, clinical insights.</p>

              <p>As a mother, I have a good family understanding. Keen to support you make changes manageable and practical with family life. Manage it easily.</p>

              <p>I use health coaching to complement and support the nutrition changes you make, and help you find the motivation you need. Provide support and accountability to make your changes successful and right for you. Guide you through any resistance. So that you manage it.</p>

              <p>I use my cooking background to make really practical/simple dietary changes that are delicious so you enjoy the process and develop a renewed relationship with food. This is not going to be a process involving abstinence and sacrifice.</p>

              <p>I will meet you where you are and work with you and what you can do, not impose a list of requirements that aren’t compatible; my primary concern is to make it achievable and easily incorporated into your life. Together we’ll work out the right plan for you.</p>

              <p>I am a qualified Nutritional Therapist with a diploma from The Institute of Optimum Nutrition (ION) in Richmond, a leading school of science and evidence-based Nutritional Therapy in the UK.</p>

              <p>I am registered with our professional body, The British Association of Applied Nutrition and Nutritional Therapy (BANT), and with the Complementary and Natural Healthcare Council (CNHC), which demand high standards of practice.</p>

              <p>I am fully insured. To keep abreast of the latest science and developments, I attend professional training events and seminars regularly.</p>

              <ul className="about_lst_links">
                <li>
                  <a href="https://www.tickettailor.com" target="_blank" rel="noopener noreferrer" title="https://www.tickettailor.com">https://www.tickettailor.com</a>
                </li>
                <li>
                  <a href="https://nutriadmin.com" target="_blank" rel="noopener noreferrer" title="https://nutriadmin.com">https://nutriadmin.com</a>
                </li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" offset={20}>
              <div className="about_ctr_accreditations-mobile">
                <img src="/assets/bant-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/bant-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/bant-logo.gif")} alt="Member of BANT" />
                <img src="/assets/cnhc-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/cnhc-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/cnhc-logo.gif")} alt="Complementary and Natural Healthcare Council" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

const About = connect(mapStateToProps, null)(ConnectedAbout);
export default About;
