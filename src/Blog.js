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
    // noinspection JSIgnoredPromiseFromCall
    this.downloadBlogArticlesRecipes(this.getApiUrl(category, recipeCategory), category)
    .then()
    .catch();
  }


  /**
   * @param category
   * @param recipeCategory
   * @returns {string}
   */
  getApiUrl(category, recipeCategory) {
    const recipeUrl = recipeCategory === "all" ? "/recipes" : "/recipes/category/" + recipeCategory;
    return category === "all" ? "/blog/articles-recipes" : category === "recipes" ? recipeUrl : "/blog/category/" + category;
  }


  /**
   * @param url
   * @param category
   * @returns {Promise<void>}
   */
  async downloadBlogArticlesRecipes(url, category) {
    await axios.get(process.env.REACT_APP_API_URL + url, {
      withCredentials: true
    })
    .then(response => {
      const processed = this.collateData(response.data, category);
      this.setAllDataInState(processed);
    })
    .catch(() => alert(this.state.errorMsg));
  }


  /**
   * @param data
   * @param category
   * @returns {{recipes: (*|null), articlesRecipes: (*[]), articles: (*|null)}}
   */
  collateData(data, category) {
    return {
      articles: category === "all" ? data.articles : null,
      recipes: category === "all" ? data.recipes : null,
      articlesRecipes: category === "all" ? this.processBlogArticlesRecipes(data.articles, data.recipes)
        : category === "articles" ? this.processBlogArticlesRecipes(data, null)
        : this.processBlogArticlesRecipes(null, data)
    }
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

    return this.sortByDate(articlesArr.concat(recipesArr));
  }


  /**
   * @param articlesRecipes
   * @returns {*[]}
   */
  sortByDate(articlesRecipes) {
    return articlesRecipes.sort((a, b) => b.epoch - a.epoch);
  }


  /**
   * @param processed
   */
  setAllDataInState(processed) {
    this.setState(processed);
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
