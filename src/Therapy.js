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

        <div className="therapy_ctr_poster">
          <Controller>
            <Scene triggerElement=".therapy_ctr_poster" triggerHook="onLeave" duration={1200}>
              {(progress) => (
                <Tween from={{ css: { bottom: "-80px" } }} to={{ css: { bottom: "150px" } }} totalProgress={progress} paused>
                  <div className="therapy_img_chem-guts">
                    <img src="/assets/tnb-therapy-1.png" alt="" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>

        <div className="therapy_ctr_anim">
          <Controller>
            <Scene triggerElement=".therapy_ctr_mobile-poster" triggerHook="onLeave" offset={-0.05} duration={2000}>
              {(progress) => (
                <Tween to={{ css: { position: 'relative', height: '200px' } }} ease="Strong.easeOut" totalProgress={progress} paused>
                  <div className="therapy_ctr_mobile-poster"></div>
                </Tween>
              )}
            </Scene>

            <Scene triggerElement=".therapy_ctr_anim" triggerHook="onLeave" duration={300}>
              {(progress) => (
                <Tween to={{ css: { top: "50px" } }} totalProgress={progress} paused>
                  <div className="therapy_img_chem-guts-mobile">
                    <img src="/assets/tnb-therapy-1.png" alt="" />
                  </div>
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

                <img className="therapy_img_puzzle" src="/assets/tnb-therapy-puzzle.jpg" alt="" />
              </div>

              <div>
                <p>Nutritional Therapy uses up-to-date nutrition science to promote mental and physical health – your health and wellbeing. Nutritional therapy is not an ‘off-the-peg’ remedy or set of instructions because:</p>

                <ul>
                  <li>you are entirely unique, right down to your biochemistry;</li>
                  <li>your body works as a whole and all your systems (immune, digestive, hormonal etc.) are interconnected, not operating in isolation;</li>
                </ul>

                <p className="_mod_pad-top">To do this requires detective work, using a thorough case history to develop an in-depth understanding of your health.</p>

                <ul>
                  <li>it aims to uncover the root biochemical imbalance(s) that undermine your health. It asks why these have arisen (and therefore how to rebalance them), not just to how to patch them up.</li>
                  <li>it is personalised to you and tailored your needs.</li>
                  <li>it recognises that nutrition is just one of the central pillars of health, and that considering your environment, exercise, sleep and stress is also necessary.</li>
                </ul>

                <p className="_mod_pad-top">Ultimately, Nutritional Therapy uses personalised diet and lifestyle analysis to find out what changes are needed to rebalance your biochemistry so you can reach optimal health and feel terrific.</p>

                <img className="therapy_img_puzzle-mobile" src="/assets/tnb-therapy-puzzle.jpg" alt="" />
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

                <img className="therapy_img_infographic" src="/assets/tnb-infographic-all.jpg" alt="" />
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
                  <p>...during the initial consultation (90 minutes) we discuss your health goal(s) and questionnaire, exploring your...</p>

                  <p>...family history, mother’s prenatal health and your birth, your health and diet in infancy, childhood and up until now, formal diagnoses and medical history, sleep, major stresses and other relevant events...</p>

                  <p>This is to develop an understanding of how your body works and what might have brought you to this point. It identifies important factors that may have triggered or contributed to your health concern.</p>

                  <p>We consider this information alongside your symptoms, diet, sleep, and other important aspects of your life. It starts to reveal what specific biochemical factors might be holding you back from good health. For example, the intestinal and detoxification systems are often involved.</p>

                  <p>Then, together, we develop an initial dietary and lifestyle plan that is achievable and works for you.</p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown">
                  <img className="therapy_img_arrow" src="/assets/arrow-one-side.svg" alt="" />
                </ScrollAnimation>

                <div className="_spc _dim_40"></div>

                <ScrollAnimation animateIn="fadeInDown">
                  <h3>Next...</h3>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown">
                  <p>...while you start implementing the new changes, the detective work really begins. I research the information we’ve discussed, digging deeper to try to reveal the root(s) causes of your symptoms.</p>

                  <p>Sometimes, this is straightforward. Sometimes it is not. We may discuss using blood, urine, stool and/or other tests to help reveal more detail about how your body is working.</p>

                  <p>This research and any test results are used to inform what specific changes may be necessary. This is discussed during subsequent consultations.</p>

                  <p>This process requires time – our bodies are incredibly complex. It also takes a degree of effort from you. Nutritional Therapy works really well with health coaching which I use to support you establish new habits and help you overcome any challenges that may emerge.</p>
                </ScrollAnimation>

                <img className="therapy_img_infographic-mobile" src="/assets/tnb-infographic-all.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
