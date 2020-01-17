import React, { Component } from "react";
import axios from "axios";

import { Title } from "./Title";
import { BlogMenu } from "./BlogMenu";
import { BlogArticles } from "./BlogArticles";
import { Loader } from "./Loader";


/**
 * BE WEB APPLICATION
 * THE NUTRITIONAL BEAN
 *
 * Blog Component
 *
 * @author Eric L., Birute M.
 * @copyright 2018-2020, BE
 * @see https://www.its-be-studio.com
 * @version 1.x
 */
export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null,
      recipes: null,
      articlesRecipes: [],
      errorMsg: "There has been a problem retrieving data for the blog. Please try again later.",
    };
  }


  componentDidMount() {
    window.scroll(0, 0);

    this.getBlogArticlesRecipes("all");
  }


  /**
   * @param category
   * @param recipeCategory
   */
  getBlogArticlesRecipes(category, recipeCategory) {
    const recipeUrl = recipeCategory === "all" ? "/recipes" : "/recipes/category/" + recipeCategory;
    const url = category === "all" ? "/blog/articles-recipes" : category === "recipes" ? recipeUrl : "/blog/category/" + category;

    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
        withCredentials: true
      })
      .then(() => {
        axios.get(process.env.REACT_APP_API_URL + url, {
            withCredentials: true
          })
          .then(response => {

            if(category === "all") {
              this.setState({
                articles: response.data.articles,
                recipes: response.data.recipes
              });

              let articlesRecipes = this.processBlogArticlesRecipes(this.state.articles, this.state.recipes);
              articlesRecipes = this.sortByDate(articlesRecipes);

              this.setState({
                articlesRecipes
              });
            } else if(category === "recipes") {
              let recipes = this.processBlogArticlesRecipes(null, response.data);
              recipes = this.sortByDate(recipes);

              this.setState({
                articlesRecipes: recipes
              });
            } else {
              let articles = this.processBlogArticlesRecipes(response.data);
              articles = this.sortByDate(articles);

              this.setState({
                articlesRecipes: articles
              });
            }

          })
          .catch(() => alert(this.state.errorMsg));

      })
      .catch(() => alert(this.state.errorMsg));
  }


  /**
   * @param articles
   * @param recipes
   * @returns {*[]}
   */
  processBlogArticlesRecipes(articles, recipes) {
    let articlesArr = [];
    let recipesArr = [];

    if(articles) {
      articlesArr = articles.map(article => {
        let categoryStr = "";
        if(article.categories) {
          article.categories.forEach((cat, index) => {
            categoryStr += cat.name;

            if(index !== article.categories.length - 1) {
              categoryStr += ", ";
            } else {
              categoryStr += " - ";
            }
          });
        }

        // noinspection JSUnresolvedVariable,JSUnresolvedVariable
        return {
          title: article.title,
          permalink: article.permalink,
          excerpt: article.excerpt,
          poster: article.poster,
          updated: article.updated_at,
          epoch: new Date(article.updated_at.replace(/-/g, '/')).getTime(),
          categories: categoryStr,
          type: "article"
        };
      });
    }

    if(recipes) {
      // noinspection JSUnresolvedVariable,JSUnresolvedVariable
      recipesArr = recipes.map(recipe => ({
        title: recipe.title,
        permalink: recipe.permalink,
        excerpt: recipe.excerpt,
        poster: recipe.poster,
        updated: recipe.updated_at,
        epoch: new Date(recipe.updated_at.replace(/-/g, '/')).getTime(),
        categories: "Recipe - ",
        type: "recipe"
      }));
    }

    return articlesArr.concat(recipesArr);
  }


  /**
   * @param articlesRecipes
   * @returns {any}
   */
  sortByDate(articlesRecipes) {
    return articlesRecipes.sort((a, b) => b.epoch - a.epoch);
  }


  render() {
    if(!this.state.articlesRecipes) {
      return (
        <Loader />
      );
    }

    //noinspection ThisExpressionReferencesGlobalObjectJS
    return (
      <div className="blog_ctr">
        <Title page="Blog" />
        <BlogMenu callback={this.getBlogArticlesRecipes.bind(this)} />

        <BlogArticles articlesRecipes={this.state.articlesRecipes} />
      </div>
    );
  }
}
