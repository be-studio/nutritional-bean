import React from "react";
import { Link } from "react-router-dom";

export function Title(props) {
  let titleCtrStyle;
  let titleStyle;
  let pageTitleStyle;

  if(props.absolute) {
    titleCtrStyle = {
      width: "auto",
      margin: "-12px 0"
    };

    titleStyle = {
      position: "absolute",
      top: "76px",
      left: "50%",
      height: "100px",
      transform: "translate(-50%, -50%)"
    };

    pageTitleStyle = {
      display: props.page ? "block" : "none",
      position: "absolute",
      top: "96px",
      width: "100%"

    };
  } else {
    titleCtrStyle = {};
    titleStyle = {};
    pageTitleStyle = {
      display: props.page ? "block" : "none"
    };
  }

  return (
    <div className="title_ctr" style={titleCtrStyle}>
      <Link to="/" title="The Nutritional Bean">
        <img src="/assets/tnb-logotype.svg" onMouseOver={e => (e.currentTarget.src = "/assets/tnb-logotype-hb-2.svg")} onMouseOut={e => (e.currentTarget.src = "/assets/tnb-logotype.svg")} alt="The Nuritional Bean" style={titleStyle} />
      </Link>

      <h1 className="_txt_page-title" style={pageTitleStyle}>
        [ {props.page} ]
      </h1>
    </div>
  );
}
