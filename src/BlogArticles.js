import React, { Component } from "react";
import { Masonry } from "./Masonry";
import { BlogItem } from "./BlogItem";
import { Loader } from "./Loader";

export class BlogArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesRecipes: null
    };
  }


  componentWillUpdate(nextProps, nextState, nextContext) {
    if(nextProps.articlesRecipes != this.state.articlesRecipes) {
      this.setState({
        articlesRecipes: nextProps.articlesRecipes
      });
    }
  }


  formatDate(date) {
    const rawDate = new Date(date);

    const day = rawDate.getDate() < 10 ? "0" + rawDate.getDate() : rawDate.getDate();
    const adjMonth = rawDate.getMonth() + 1;
    const month = adjMonth < 10 ? "0" + adjMonth : adjMonth;

    return `${day}.${month}.${rawDate.getFullYear()}`;
  }


  render() {
    if(this.state.articlesRecipes) {
      const blogArticles = this.state.articlesRecipes.map((articleRecipe, index) => {
        //noinspection ThisExpressionReferencesGlobalObjectJS
        return (
          <BlogItem key={index} itemKey={index} index={index} title={articleRecipe.title} permalink={articleRecipe.permalink} poster={articleRecipe.poster} excerpt={articleRecipe.excerpt} categories={articleRecipe.categories} updated={this.formatDate(articleRecipe.updated)} type={articleRecipe.type} />
        );
      });

      return (
        <>
          <div className="blog-articles_ctr">
            <Masonry gap={60}>
              {blogArticles}
            </Masonry>
          </div>

          <div className="blog-articles_ctr_mobile">
            <Masonry columns={1}>
              {blogArticles}
            </Masonry>
          </div>
        </>
      );
    } else {
      return (
        <Loader />
      );
    }
  }
}
