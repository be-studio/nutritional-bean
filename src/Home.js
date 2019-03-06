import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";

export class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="home_ctr">


        <Controller>
          <Scene triggerHook="onLeave" pin>
            <div className="home_ctr_poster"></div>
          </Scene>

          <Scene triggerHook="onLeave" duration={'200%'}>
            <div className="home_ctr_bacteria">
              <img src="assets/tnb_bacteria.png" />
            </div>
          </Scene>

          <Scene triggerHook="onLeave">
            <div className="home_ctr_top-panel">
              Home
            </div>
          </Scene>
        </Controller>

        <div style={{ height: '1000px' }}></div>
      </div>
    );
  }
}
