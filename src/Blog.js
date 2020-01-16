import React, { Component } from "react";
import axios from "axios";

import { Masonry } from "./Masonry";
import { Title } from "./Title";
import { BlogMenu } from "./BlogMenu";
import { BlogArticles } from "./BlogArticles";
import { Loader } from "./Loader";

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
    this.getBlogArticlesRecipes("all");
  }


  getBlogArticlesRecipes(category, recipeCategory) {
    const recipeUrl = recipeCategory == "all" ? "/recipes" : "/recipes/category/" + recipeCategory;
    const url = category == "all" ? "/blog/articles-recipes" : category == "recipes" ? recipeUrl : "/blog/category/" + category;

    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
        withCredentials: true
      })
      .then(() => {
        axios.get(process.env.REACT_APP_API_URL + url, {
            withCredentials: true
          })
          .then(response => {

            if(category == "all") {
              this.setState({
                articles: response.data.articles,
                recipes: response.data.recipes
              });

              let articlesRecipes = this.processBlogArticlesRecipes(this.state.articles, this.state.recipes);
              articlesRecipes = this.sortByDate(articlesRecipes);

              this.setState({
                articlesRecipes
              });
            } else if(category == "recipes") {
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


  sortByDate(articlesRecipes) {
    return articlesRecipes.sort((a, b) => b.epoch - a.epoch);
  }


  formatDate(date) {
    const rawDate = new Date(date);

    const day = rawDate.getDate() < 10 ? "0" + rawDate.getDate() : rawDate.getDate();
    const adjMonth = rawDate.getMonth() + 1;
    const month = adjMonth < 10 ? "0" + adjMonth : adjMonth;

    return `${day}.${month}.${rawDate.getFullYear()}`;
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
