import React, { Component } from "react";
import { Masonry } from "masonic";
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
    // Need to substitute space in date string with 'T' to deal with Safari's
    // mishandling of the date.
    const rawDate = new Date(date.replace(/\s/, "T"));

    const day = rawDate.getDate() < 10 ? "0" + rawDate.getDate() : rawDate.getDate();
    const adjMonth = rawDate.getMonth() + 1;
    const month = adjMonth < 10 ? "0" + adjMonth : adjMonth;

    return `${day}.${month}.${rawDate.getFullYear()}`;
  }


  render() {
    console.log(this.state.articlesRecipes);
    if(this.state.articlesRecipes && this.state.articlesRecipes.length !== 0) {
      const blogArticles = this.state.articlesRecipes;

      /*const blogArticles = this.state.articlesRecipes.map((articleRecipe, index) => {
        //noinspection ThisExpressionReferencesGlobalObjectJS
        return (
          <BlogItem key={index} itemKey={index} index={index} title={articleRecipe.title} permalink={articleRecipe.permalink} poster={articleRecipe.poster} excerpt={articleRecipe.excerpt} categories={articleRecipe.categories} updated={this.formatDate(articleRecipe.updated)} type={articleRecipe.type} />
        );
      });*/

      /*const masonryCard = ((index, articleRecipe) => (
          <BlogItem key={index} itemKey={index} index={index} title={articleRecipe.title} permalink={articleRecipe.permalink} poster={articleRecipe.poster} excerpt={articleRecipe.excerpt} categories={articleRecipe.categories} updated={this.formatDate(articleRecipe.updated)} type={articleRecipe.type} />
        )
      );*/

      const MasonryCard = ({index, data: articleRecipe, width}) => (
        <BlogItem key={index} itemKey={index} index={index} title={articleRecipe.title} permalink={articleRecipe.permalink} poster={articleRecipe.poster} excerpt={articleRecipe.excerpt} categories={articleRecipe.categories} updated={this.formatDate(articleRecipe.updated)} type={articleRecipe.type} />
      );

      return (
        <>
          <div className="blog-articles_ctr">
            <Masonry items={blogArticles} render={MasonryCard} columnCount={2} columnGutter={20} />
          </div>

          <div className="blog-articles_ctr_mobile">
            <Masonry items={blogArticles} render={MasonryCard} columnCount={1} columnGutter={0} />
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
