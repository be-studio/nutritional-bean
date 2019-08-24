import React, { Component } from "react";
import axios from "axios";
import SanitizedHTML from "react-sanitized-html";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

import { BlogNavigator } from "./BlogNavigator";
import { Title } from "./Title";
import { Loader } from "./Loader";


export class BlogArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      poster: null,
      content: null,
      updated: null,
      categories: null,
      tags: null,
      postSequence: null,
      loaded: false
    };
  }


  componentDidMount() {
    window.scroll(0, 0);

    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => {
      axios.get(process.env.REACT_APP_API_URL + "/blog/article/" + this.props.match.params.permalink, {
        withCredentials: true
      })
      .then(response => {
        const article = response.data;

        const formatCats = article.categories.map(cat => cat.name);
        const formatTags = article.tags.map(tag => tag.name);

        this.setState({
          title: article.title,
          poster: article.poster,
          content: article.content,
          updated: this.formatDate(article.updated_at),
          categories: this.generateCatsTagsStr(formatCats),
          tags: formatTags
        });

        this.getPrevNextPost();
      })
      .catch(() => alert("There has been a problem retrieving the blog article."));
    })
    .catch(() => alert("There has been a problem."));
  }


  getPrevNextPost() {
    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => {
    axios.get(process.env.REACT_APP_API_URL + "/blog/prevnextpost/" + this.props.match.params.permalink, {
        withCredentials: true
      })
      .then(response => {
        const posts = response.data;
        this.setState({
          postSequence: {
            prevTitle: posts.prev.title,
            prevPermalink: posts.prev.permalink,
            prevPoster: posts.prev.poster,
            prevType: posts.prev.type,
            nextTitle: posts.next.title,
            nextPermalink: posts.next.permalink,
            nextPoster: posts.next.poster,
            nextType: posts.next.type
          },
          loaded: true
        });
      })
      .catch(() => alert("There has been a problem retrieving the next and/or previous posts. Please try again later."));
    })
    .catch(() => alert("There has been a problem retrieving the next and/or previous posts. Please try again later."));
  }


  generateCatsTagsStr(categoriesTags) {
    if(categoriesTags.length == 0) {
      return "";
    }

    let str = "";

    categoriesTags.forEach((catTag, index) => {
      str += catTag;
      if(index != categoriesTags.length - 1) {
        str += ", ";
      }
    });

    return str;
  }


  formatDate(date) {
    // Need to substitute space in date string with 'T' to deal with Safari's
    // mishandling of the date.
    const rawDate = new Date(date.replace(/\s/, 'T'));

    const day = rawDate.getDate() < 10 ? "0" + rawDate.getDate() : rawDate.getDate();
    const adjMonth = rawDate.getMonth() + 1;
    const month = adjMonth < 10 ? "0" + adjMonth : adjMonth;

    return `${day}.${month}.${rawDate.getFullYear()}`;
  }


  checkCats() {
    if(this.state.categories == "") {
      return (
        <></>
      );
    }

    return (
      <>
        {this.state.categories} &mdash;
      </>
    )
  }


  checkTags() {
    if(!this.state.tags || this.state.tags == '') {
      return (
        <>
          <em>None</em>
        </>
      );
    }

    return (
      <>
        {
          this.state.tags.map(tag => (
            <span className="blog-article_ctr_tag">{tag}</span>
          ))
        }
      </>
    );
  }


  render() {
    const posterStyle = {
      backgroundImage: "url('" + process.env.REACT_APP_API_PUBLIC_URL + this.state.poster + "')"
    };

    const newPost = (
      <>
        <Controller>
            <Scene triggerElement=".blog-article_ctr_panel" triggerHook="onLeave" offset="-500px" duration={1200}>
              {(progress) => (
                <Tween from={{ css: { top: "80vh" } }} to={{ css: { top: "-200px" } }} totalProgress={progress} paused>
                  <div className="blog-article_img_new">
                    <img src="/assets/tnb_new_post_2.png" alt="" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
      </>
    );

    let newDiv = ( <></> );

    if(this.props.location.state) {
      newDiv = this.props.location.state.newItem ? newPost : ( <></> );
    }

    if(this.state.loaded) {
      return (
        <div className="blog-article_ctr">
          <Title absolute page="Blog" />

          <div className="blog-article_ctr_poster" style={posterStyle}></div>

          <div className="blog-article_ctr_panel">
            <div className="blog-article_ctr_content">
              <h1>{this.state.title}</h1>

              {newDiv}

              <p className="blog-article_txt_cat-updated">{this.checkCats()} {this.state.updated}</p>

              <div className="blog-article_ctr_body">
                <SanitizedHTML allowedTags={["h1", "h2", "h3", "p", "pre", "blockquote", "span", "ul", "ol", "li", "img", "figure", "figcaption", "strong", "em", "b", "i", "u"]} html={this.state.content} />

                <div className="blog-article_ctr_tags">
                  Tags: {this.checkTags()}
                </div>
              </div>

              <BlogNavigator postSequence={this.state.postSequence} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Loader />
      );
    }
  }
}
