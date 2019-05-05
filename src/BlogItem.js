import React from "react";

import { LinkArrow } from "./LinkArrow";

export function BlogItem(props) {
  const noHref = "#";

  //noinspection ThisExpressionReferencesGlobalObjectJS
  return (
    <div className="blog_grd_item" key={props.itemKey}>
      <div>
        <img src={process.env.REACT_APP_API_PUBLIC_URL + props.poster} alt={props.title} /><br />
      </div>

      <div>
        <h2>{props.title}</h2>
        <p className="blog_txt_updated">{props.categories}{props.updated}</p>
      </div>

      <div>
        {props.excerpt}
      </div>

      <div className="blog_lnk_read">
        <a href={noHref}>Keep reading<LinkArrow /></a>
      </div>
    </div>
  );
}
