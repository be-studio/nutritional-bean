import React from "react";
import { Link } from "react-router-dom";

export function BlogNavigator(props) {
  console.log(props.postSequence);

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
          <a href={"/blog/article/" + seq.prevPermalink}>Previous Post</a>
        </>
      );
    } else {
      prev = (
        <>
          {image}
          <a href={"/recipe/" + seq.prevPermalink}>Previous Post</a>
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
          <a href={"/blog/article/" + seq.nextPermalink}>Next Post</a>
          {image}
        </>
      );
    } else {
      next = (
        <>
          <a href={"/recipe/" + seq.nextPermalink}>Next Post</a>
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
