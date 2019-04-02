import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import ScrollAnimation from 'react-animate-on-scroll';

import { Title } from "./Title";



export class Therapy extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }


  render() {
    return (
      <div className="therapy_ctr">
        <Title absolute page="Therapy" />

        <div className="therapy_ctr_poster"></div>

        <div className="therapy_ctr_anim">
          <Controller>
            <Scene triggerElement=".therapy_ctr_mobile-poster" triggerHook="onLeave" offset={-0.05} duration={2000}>
              {(progress) => (
                <Tween to={{ css: { position: 'relative', height: '200px' } }} ease="Strong.easeOut" totalProgress={progress} paused>
                  <div className="therapy_ctr_mobile-poster"></div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="therapy_ctr_panel _ele_top-panel">
          <div className="therapy_ctr_content">
            <div className="therapy_ctr_block">
              <div>
                <h2>
                  What is<br />
                  Nutritional Therapy?
                </h2>
              </div>

              <div>
                <p>Nutritional Therapy uses up-to-date nutrition science to promote mental and physical health - YOUR health and wellbeing. Nutritional therapy is not an ‘off-the peg’ remedy or set of instructions because:</p>

                <ul>
                  <li>it considers you to be entirely unique, down to your biochemistry;</li>
                  <li>it recognises that your body works as a whole – that all your systems are interconnected, and not working in isolation;</li>
                  <li>it aims to uncover the root cause(s) of your health concern. It asks WHY your symptoms have arisen, not how to patch them up.</li>
                </ul>

                <p className="_mod_pad-top">To do this requires detective work, using a thorough case history to develop an in-depth understanding of your health. Therefore:</p>

                <ul>
                  <li>it is highly personalised to you and tailored your needs.</li>
                  <li>it recognises that nutrition is one of the central pillars of health, with environment, exercise, sleep and stress close behind.</li>
                </ul>

                <p className="_mod_pad-top">Ultimately, Nutritional Therapy seeks to use personalised dietary and life- style analysis and changes to overcome barriers to your body realising its optimal health.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="therapy_ctr_parallax">
          <Controller>
            <Scene triggerHook="onEnter" duration="350%">
              <Timeline wrapper={<div className="therapy_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -30 }} to={{ yPercent: 10 }}>
                  <img src="/assets/tnb-therapy-2.jpg" alt="" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="therapy_ctr_parallax-mobile">
          <Controller>
            <Scene triggerHook="onEnter" duration="250%">
              <Timeline wrapper={<div className="therapy_ctr_parallax-image" />}>
                <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                  <div className="therapy_ctr_parallax-image-mobile"></div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className="therapy_ctr_panel _ele_top-panel">
          <div className="therapy_ctr_content">
            <div className="therapy_ctr_block">
              <div>
                <h2>Process</h2>
              </div>

              <div>
                <ScrollAnimation animateIn="fadeInDown">
                  <h3>
                    THIS IS WHERE<br />
                    YOUR HEALING JOURNEY BEGINS...
                  </h3>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown">
                  <img className="therapy_img_arrow" src="/assets/arrow-one-side.svg" alt="" />
                </ScrollAnimation>

                <div className="_spc _dim_40"></div>

                <ScrollAnimation animateIn="fadeInDown">
                  <h3>First...</h3>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown">
                  <p>...during the initial consultation (90 minutes) we discuss your health goal(s) and start the exploring your...</p>

                  <p>...family history, mother’s prenatal health and birth, health and diet in infancy, childhood and up until now, formal diagnoses and medical history, sleep and major stresses...</p>

                  <p>...in order to develop an understanding of how your body works and what might have brought you to this point. It helps to identify important factors that might have triggered ill health. It is essential to unearthing underlying cause(s).</p>

                  <p>This is considered alongside your symptoms, diet, sleep, and other important aspects of your life. It starts to reveal what specific biochemical factors might be holding you back from good health. For example, the intestinal and detoxification systems are often involved.</p>

                  <p>Then, TOGETHER, we develop an initial dietary and lifestyle plan that is achievable and works for YOU.</p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown">
                  <img className="therapy_img_arrow" src="/assets/arrow-one-side.svg" alt="" />
                </ScrollAnimation>

                <div className="_spc _dim_40"></div>

                <ScrollAnimation animateIn="fadeInDown">
                  <h3>Next...</h3>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown">
                  <p>...while you start implementing the new tweaks and changes, the detective work really begins! I beaver away, researching the information we’ve discussed, digging deeper in the process of revealing the root(s) of an imbalance.</p>

                  <p>Sometimes, this is straightforward. Sometimes it is not. We may discuss using blood, urine, stool and/or other tests to help reveal more detail of how your body is working.</p>

                  <p>The detective work and test results are used to make further changes increasingly personalised.</p>

                  <p>This process requires time – our bodies are incredibly complex. It also requires a degree of effort from you. Therefore, Nutritional Therapy works really well with health coaching which I use to support you to establish the new habits and help you overcome any challenges that may emerge.</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
