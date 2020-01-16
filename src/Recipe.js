import React, { Component } from "react";
import axios from "axios";
import SanitizedHTML from "react-sanitized-html";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

import { BlogNavigator } from "./BlogNavigator";
import { Title } from "./Title";
import { Loader } from "./Loader";


export class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      poster: null,
      ingredients: null,
      servings: null,
      method: null,
      content: null,
      updated: null,
      categories: null,
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
        axios.get(process.env.REACT_APP_API_URL + "/recipe/" + this.props.match.params.permalink, {
            withCredentials: true
          })
          .then(response => {
            const recipe = response.data;

            const formatCats = recipe.categories.map(cat => cat.name);

            this.setState({
              title: recipe.title,
              poster: recipe.poster,
              ingredients: recipe.ingredients,
              servings: recipe.servings,
              method: recipe.method,
              content: recipe.content,
              updated: this.formatDate(recipe.updated_at),
              categories: this.generateCatsTagsStr(formatCats),
            });

            this.getPrevNextPost();
          })
          .catch(() => alert("There has been a problem retrieving the recipe."));
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
    const rawDate = new Date(date);

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

              <p className="blog-article_txt_cat-updated">Recipe/{this.checkCats()} {this.state.updated}</p>

              <div className="blog-article_ctr_body">
                <h1>Ingredients:</h1>
                <p>Enough for {this.state.servings} {this.state.servings == 1 ? "serving" : "servings"}.</p>
                <div className="recipe_ctr_ingredients _txt_sans">
                  <SanitizedHTML allowedTags={["p", "span", "ul", "li", "strong", "em", "b", "i", "u", "a"]} html={this.state.ingredients} />
                </div>

                <h1>Method:</h1>
                <div className="recipe_ctr_method">
                  <SanitizedHTML allowedTags={["p", "span", "ul", "ol", "li", "strong", "em", "b", "i", "u", "a"]} html={this.state.method} />
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
