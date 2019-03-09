import React, { Component } from "react";


export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }


  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
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

        <div className="navigation_ctr_menu" style={this.state.menuOpen ? { left: 0 } : { left: "-350px" }}>
          <div>
            Hello
          </div>
        </div>
      </>
    );
  }
}
