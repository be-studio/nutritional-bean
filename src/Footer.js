import React, { Component } from "react";
import { connect } from "react-redux";
import { setFooterHeight } from "./store/actions";
import { FooterMenu } from "./FooterMenu";
import { NewsletterSignUp } from "./NewsletterSignUp";

function mapStateToProps(state) {
  return {
    footerHeight: state.footerHeight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFooterHeight: height => dispatch(setFooterHeight(height))
  };
}


export class ConnectedFooter extends Component {
  constructor(props) {
    super(props);

    this.onWindowResize = this.onWindowResize.bind(this);
  }


  componentDidMount() {
    this.props.setFooterHeight(document.querySelector(".footer_ctr").clientHeight - 84);
    window.addEventListener("resize", this.onWindowResize);
  }


  onWindowResize() {
    let resize;

    clearTimeout(resize);
    resize = setTimeout(() => {
      const height = document.querySelector(".footer_ctr").clientHeight;
      if(height !== this.props.footerHeight) {
        this.props.setFooterHeight(document.querySelector(".footer_ctr").clientHeight);
      }
    }, 250);
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }


  render() {
    return (
      <div className="footer_ctr">
        <div>
          <div>
            <FooterMenu />
          </div>

          <div>
            <NewsletterSignUp />
          </div>
        </div>
      </div>
    );
  }
}

const Footer = connect(mapStateToProps, mapDispatchToProps)(ConnectedFooter);
export default Footer;
