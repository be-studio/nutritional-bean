import React from "react";


export function Title(props) {
  let titleStyle;

  if(props.absolute) {
    titleStyle = {
      position: "absolute",
      top: "60px",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
  } else {
    titleStyle = {};
  }

  return (
    <div className="title_ctr">
      <a href="/" title="The Nutritional Bean">
        <img src="assets/tnb-logotype.svg" onMouseOver={e => (e.currentTarget.src = "assets/tnb-logotype-hb-2.svg")} onMouseOut={e => (e.currentTarget.src = "assets/tnb-logotype.svg")} alt="The Nuritional Bean" style={titleStyle} />
      </a>
    </div>
  );
}
