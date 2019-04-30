import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import ScrollAnimation from 'react-animate-on-scroll';

import { Title } from "./Title";


export class About extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }


  render() {
    return (
      <div className="about_ctr _ctr_shell">
        <div className="about_ctr_desktop">
          <Title page="About Harriet" />
        </div>

        <div className="about_ctr_mobile">
          <Controller>
            <Scene triggerElement=".about_ctr_harriet" triggerHook="onLeave" offset={-0.05} duration={2000}>
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
              <a className="_mod_no-style" href="https://bant.org.uk" target="_blank" rel="noopener noreferrer" title="Member of BANT">
                <img src="/assets/bant-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/bant-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/bant-logo.gif")} alt="Member of BANT" />
              </a>

              <a className="_mod_no-style" href="https://www.cnhc.org.uk" target="_blank" rel="noopener noreferrer" title="Complementary and Natural Healthcare Council">
                <img src="/assets/cnhc-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/cnhc-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/cnhc-logo.gif")} alt="Complementary and Natural Healthcare Council" />
              </a>
            </div>
          </div>

          <div>
            <ScrollAnimation animateIn="fadeInDown">
              <p className="_txt_intro">I’m Harriet Bindloss, a registered Nutritional Therapist practising in Bruton, Somerset, UK.</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInDown">
              <p>I use robust science- and evidence-based methods for assessing your health and informing the solutions we discuss.</p>

              <p>As a mother, I have a good family understanding, and I help you make adjustments that are manageable and practical with family life.</p>

              <p>Complementing the nutrition changes you make, I help you find the motivation you need, provide lots of support and accountability, and guide you through any challenges or resistance you may encounter, so the improvements are successful and lasting.</p>

              <p>I use my cooking background to make practical and simple dietary recommendations that are delicious, so you enjoy the process and develop a renewed relationship with food. This is not going to be a process involving abstinence and sacrifice.</p>

              <p>I will work with you according to what you can do and what your situation is. I do not impose a list of requirements that aren’t compatible; my primary concern is to make it achievable and easily incorporated into your life. Together we’ll work out the right plan for you.</p>

              <p>I am a qualified and registered Nutritional Therapist with a diploma from The Institute for Optimum Nutrition (ION) in Richmond, a leading school of science and evidence-based Nutritional Therapy in the UK.</p>

              <p>I am registered with The British Association of Applied Nutrition and Nutritional Therapy (BANT), and with the Complementary and Natural Healthcare Council (CNHC).</p>

              <p>I am fully insured. To keep abreast of the latest science and developments, I attend professional training events and seminars regularly.</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInDown" offset={20}>
              <div className="about_ctr_accreditations-mobile">
                <a className="_mod_no-style" href="https://bant.org.uk" target="_blank" rel="noopener noreferrer" title="Member of BANT">
                  <img src="/assets/bant-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/bant-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/bant-logo.gif")} alt="Member of BANT" />
                </a>

                <a className="_mod_no-style" href="https://www.cnhc.org.uk" target="_blank" rel="noopener noreferrer" title="Complementary and Natural Healthcare Council">
                  <img src="/assets/cnhc-logo.gif" onMouseOver={e => (e.currentTarget.src = "/assets/cnhc-logo-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/cnhc-logo.gif")} alt="Complementary and Natural Healthcare Council" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="_spc _dim_20"></div>

        <ScrollAnimation animateIn="fadeInDown" offset={20}>
          <div className="about_img_afmcp-mobile">
            <img className="about_img_afmcp" src="/assets/afmcp-graduate-2018-bw.gif" onMouseOver={e => (e.currentTarget.src = "/assets/afmcp-graduate-2018-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/afmcp-graduate-2018-bw.gif")} alt="AFMCP-UK Graduate" />
          </div>
        </ScrollAnimation>

        <div className="about_ctr_content">
          <div>
            <img className="about_img_afmcp" src="/assets/afmcp-graduate-2018-bw.gif" onMouseOver={e => (e.currentTarget.src = "/assets/afmcp-graduate-2018-colour.gif")} onMouseOut={e => (e.currentTarget.src = "/assets/afmcp-graduate-2018-bw.gif")} alt="AFMCP-UK Graduate" />
          </div>

          <div className="about_txt_afmcp">
            <ScrollAnimation animateIn="fadeInDown">
              <p>
                Functional medicine emphasises a definable and teachable process of integrating multiple knowledge bases within a pragmatic intellectual matrix that focuses on functionality at many levels, rather than a single treatment for a single diagnosis. Functional medicine uses the patient’s story as a key tool for integrating diagnosis, signs and symptoms, and evidence of clinical imbalances into a comprehensive approach to improve both the patient’s environmental inputs and his or her physiological function.
              </p>

              <p>
                The Institute for Functional Medicine teaches health care professional’s how to apply these principles in practice through an intensive 5 day training course called Applying Functional Medicine in Clinical Practice&trade;.
              </p>

              <p>
                I attended and completed the AFMCP&trade;-UK training in London in 2018.
              </p>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation animateIn="fadeInDown" offset={20}>
          <div className="about_ctr_media-accred">
            <ul>
              <li>
                Photos: <a className="_mod_no-style" href="https://www.instagram.com/hananoguchi" target="_blank" rel="noopener noreferrer" title="Hana Noguchi">Hana Noguchi</a>
              </li>

              <li>
                Illustrations: <a className="_mod_no-style" href="https://www.instagram.com/chamarrant" target="_blank" rel="noopener noreferrer" title="Maureen Valfort">Maureen Valfort</a>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
