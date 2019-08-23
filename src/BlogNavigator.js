import React from "react";
import { Link } from "react-router-dom";

export function BlogNavigator(props) {
  const seq = props.postSequence;
  let prev;
  let next;

  if(seq.prevPermalink == null && seq.prevPoster == null) {
    prev = (
      <></>
    );
  } else {
    const image = (
      <img src={process.env.REACT_APP_API_PUBLIC_URL + seq.prevPoster} alt={seq.prevTitle} />
    );

    if(seq.prevType == "article") {
      prev = (
        <>
          {image}
          <Link to={"/blog/article/" + seq.prevPermalink}>Previous Post</Link>
        </>
      );
    } else {
      prev = (
        <>
          {image}
          <Link to={"/recipes/" + seq.prevPermalink}>Previous Post</Link>
        </>
      );
    }

  }

  if(seq.nextPermalink == null && seq.nextPoster == null) {
    next = (
      <></>
    );
  } else {
    const image = (
      <img src={process.env.REACT_APP_API_PUBLIC_URL + seq.nextPoster} alt={seq.nextTitle} />
    );

    if(seq.nextType == "article") {
      next = (
        <>
          <Link to={"/blog/article/" + seq.nextPermalink}>Next Post</Link>
          {image}
        </>
      );
    } else {
      next = (
        <>
          <Link to={"/recipes/" + seq.nextPermalink}>Next Post</Link>
          {image}
        </>
      );
    }

  }

  return (
    <div className="blog-nav_ctr">
      <div>
        {prev}
      </div>

      <div>
        {next}
      </div>
    </div>
  )
}
