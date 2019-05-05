import React, { Component } from "react";
import axios from "axios";

import { Masonry } from "./Masonry";
import { Title } from "./Title";
import { BlogItem } from "./BlogItem";


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
    this.getBlogArticlesRecipes();
  }


  getBlogArticlesRecipes() {
    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => {
      axios.get(process.env.REACT_APP_API_URL + "/blog/articles-recipes", {
          withCredentials: true
      })
      .then(response => {
        this.setState({
          articles: response.data.articles,
          recipes: response.data.recipes
        });

        let articlesRecipes = this.processBlogArticlesRecipes(this.state.articles, this.state.recipes);
        articlesRecipes = this.sortByDate(articlesRecipes);

        this.setState({
          articlesRecipes: articlesRecipes
        });
      })
      .catch(() => alert(this.state.errorMsg));
    })
    .catch(() => alert(this.state.errorMsg));
  }


  processBlogArticlesRecipes(articles, recipes) {
    let articlesArr;
    let recipesArr;

    if(articles) {
      articlesArr = articles.map(article => {
        let categoryStr = "";
        if(article.categories) {
          article.categories.forEach((cat, index) => {
            categoryStr += cat.name;

            if(index != article.categories.length - 1) {
              categoryStr += ", ";
            } else {
              categoryStr += " - ";
            }
          });
        }

        return {
          title: article.title,
          excerpt: article.excerpt,
          poster: article.poster,
          updated: article.updated_at,
          epoch: new Date(article.updated_at).getTime(),
          categories: categoryStr
        };
      });
    }

    if(recipes) {
      recipesArr = recipes.map(recipe => ({
        title: recipe.title,
        excerpt: recipe.excerpt,
        poster: recipe.poster,
        updated: recipe.updated_at,
        epoch: new Date(recipe.updated_at).getTime(),
        categories: "Recipe - "
      }));
    }

    return articlesArr.concat(recipesArr);
  }


  sortByDate(articlesRecipes) {
    return articlesRecipes.sort((a, b) => a.epoch - b.epoch);
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
        <div></div>
      );
    }

    //noinspection ThisExpressionReferencesGlobalObjectJS
    return (
      <div className="blog_ctr">
        <Title page="Blog" />

        <Masonry gap={40}>
          {
            this.state.articlesRecipes.map((articleRecipe, index) => {
              //noinspection ThisExpressionReferencesGlobalObjectJS
              return (
                <BlogItem itemKey={index} title={articleRecipe.title} poster={articleRecipe.poster} excerpt={articleRecipe.excerpt} categories={articleRecipe.categories} updated={this.formatDate(articleRecipe.updated)} />
              );
            })
          }
        </Masonry>
      </div>
    );
  }
}
