import React, { Component } from "react";

const KUTE = require("kute.js");
require("kute.js/kute-svg");
require("kute.js/kute-attr");


export class Loader extends Component {
  componentDidMount() {
    this.animateLoader();
  }


  animateLoader() {
    const beanGreen = '#57ab53';

    const tween1 = KUTE.fromTo('.bean',
      {
        attr: {
          fill: beanGreen
        },
        path: '.bean'
      }, {
        attr: {
          fill: 'red'
        },
        path: '.heart'
      }, {
        morphPrecision: 35,
        easing: 'easingCubicInOut',
        duration: 750,
        morphIndex: 127
      }
    );

    const tween2 = KUTE.fromTo('.bean',
      {
        attr: {
          fill: "red"
        },
        path: '.heart'
      }, {
        attr: {
          fill: beanGreen
        },
        path: '.bean'
      }, {
        morphPrecision: 35,
        easing: 'easingCubicInOut',
        duration: 750,
        morphIndex: 127
      }
    );

    tween1.chain(tween2);
    tween2.chain(tween1);

    tween1.start();
  }


  render() {
    return (
      <div className="_ctr_loading">
        <div className="_ctr_loader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500">
            <path className="bean" d="M251.6 307.8h-3C112 306.5 1.6 221.7 2.5 118.7 3.2 49.9 41.3 4.9 102.1 1.2c32-1.8 58.7 7.6 84.7 16.6 21 7.3 40.9 14.2 61.3 14.4h2.7c33.8 0 55-6.1 75.5-12.1 18.6-5.3 37.3-10.7 62.2-11.5 28.6-.8 53.7 8.9 73.8 28.5 22.4 21.9 36.1 54.9 35.8 86.2-.9 96-100.9 176.8-227.7 184-6.3.3-12.6.5-18.8.5z" fill="#57ab53" />
            <path className="heart" d="M3.1 108.7C5.1 47 37.9 6.5 92.4 3.2c28.7-1.6 52.6 5.5 73.7 18.2 26.6 16 42.5 31.9 69.1 31.9 21.3 0 34-14.3 58.5-26.6 21.3-10.6 33.5-16.2 55.8-16.9 25.6-.7 48.2 8 66.2 25.6C436 55 448.3 84.7 448 112.8 447.2 199 325.7 355 224.7 355 113 355.1.1 201.2 3.1 108.7z" visibility="hidden" />
          </svg>
        </div>
      </div>
    );
  }
}
