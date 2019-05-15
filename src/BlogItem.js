import React from "react";
import { Link } from "react-router-dom";

import { LinkArrow } from "./LinkArrow";

export function BlogItem(props) {
  const noHref = "#";
  let newPost;
  let link;

  const path = props.type == "article" ? "/blog/article/" : "/recipes/";

  if(props.index == 0) {
    newPost = (
      <img className="blog_img_new-post" src="/assets/tnb_new_post_2.png" alt="New Post" />
    );
    link = (
      <Link to={{ pathname: path + props.permalink, state: { newItem: true, postSequence: props.postSequence } }}>Keep reading<LinkArrow /></Link>
    );
  } else {
    newPost = (
      <></>
    );
    link = (
      <Link to={{ pathname: path + props.permalink, state: { newItem: false, postSequence: props.postSequence } }}>Keep reading<LinkArrow /></Link>
    );
  }

  //noinspection ThisExpressionReferencesGlobalObjectJS
  return (
    <div className="blog_grd_item" key={props.itemKey}>
      <div className="blog_img_poster">
        <img src={process.env.REACT_APP_API_PUBLIC_URL + props.poster} alt={props.title} /><br />

        {newPost}
      </div>

      <div className="blog-item_ctr_detail">
        <div>
          <h2>{props.title}</h2>
          <p className="blog_txt_updated">{props.categories}{props.updated}</p>
        </div>

        <div>
          {props.excerpt}
        </div>

        <div className="blog_lnk_read">
          {link}
        </div>
      </div>
    </div>
  );
}
