import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";


export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }


  closeMenu() {
    this.setState({
      menuOpen: false
    });
  }


  render() {
    return (
      <>
        <div className="navigation_ctr_bean" onClick={this.toggleMenu}>
          <div className="navigation_ctr_icon" style={this.state.menuOpen ? { transform: "rotateZ(45deg) translate(-50%, 7px)" } : { transform: "rotateZ(0) translateX(-50%)" }}></div>
          <div className="navigation_ctr_icon" style={this.state.menuOpen ? { opacity: 0 } : { opacity: 1 }}></div>
          <div className="navigation_ctr_icon" style={this.state.menuOpen ? { transform: "rotateZ(-45deg) translate(-50%, -7px)" } : { transform: "rotateZ(0) translateX(-50%)" }}></div>
        </div>

        <Controller>
          <Scene triggerElement=".content_ctr" triggerHook="onLeave" duration={150}>
            {(progress) => (
              <Tween to={{ css: { "background-size": "100%" } }} totalProgress={progress} paused>
                <div className="navigation_ctr_bean-mobile" onClick={this.toggleMenu}>
                  <div className="navigation_ctr_icon" style={this.state.menuOpen ? { transform: "rotateZ(45deg) translate(-50%, 7px)" } : { transform: "rotateZ(0) translateX(-50%)" }}></div>
                  <div className="navigation_ctr_icon" style={this.state.menuOpen ? { opacity: 0 } : { opacity: 1 }}></div>
                  <div className="navigation_ctr_icon" style={this.state.menuOpen ? { transform: "rotateZ(-45deg) translate(-50%, -7px)" } : { transform: "rotateZ(0) translateX(-50%)" }}></div>
                </div>
              </Tween>
            )}
          </Scene>
        </Controller>



        <div className="navigation_ctr_menu" style={this.state.menuOpen ? { left: 0 } : { left: "-350px" }}>
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={this.closeMenu}>Home</Link>
                </li>
                <li>Services</li>
                <li>Therapy</li>
                <li>
                  <Link to="/about" onClick={this.closeMenu}>About Harriet</Link>
                </li>
                <li>Blog</li>
                <li>Bookings</li>
                <li>
                  <Link to="/privacy" onClick={this.closeMenu}>Privacy</Link>
                </li>
                <li>
                  <Link to="/terms" onClick={this.closeMenu}>Terms of Business</Link>
                </li>
                <li>Contact</li>
              </ul>

              <ul>
                <li>Follow:</li>
                <li>
                  <a href="https://www.instagram.com/thenutritionalbean" target="_blank" rel="noopener noreferrer" title="Instagram">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/thenutritionalbean" target="_blank" rel="noopener noreferrer" title="Facebook">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
