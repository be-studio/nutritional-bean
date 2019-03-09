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
          <div className="navigation_ctr_icon"></div>
          <div className="navigation_ctr_icon"></div>
          <div className="navigation_ctr_icon"></div>
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
