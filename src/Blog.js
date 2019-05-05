import React, { Component } from "react";
import axios from "axios";


import { Masonry } from "./Masonry";

import { Title } from "./Title";


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
      articlesArr = articles.map(article => ({
        title: article.title,
        excerpt: article.excerpt,
        poster: article.poster,
        updated: article.updated_at,
        epoch: new Date(article.updated_at).getTime()
      }));
    }

    if(recipes) {
      recipesArr = recipes.map(recipe => ({
        title: recipe.title,
        excerpt: recipe.excerpt,
        poster: recipe.poster,
        updated: recipe.updated_at,
        epoch: new Date(recipe.updated_at).getTime()
      }));
    }

    return articlesArr.concat(recipesArr);
  }


  sortByDate(articlesRecipes) {
    return articlesRecipes.sort((a, b) => a.epoch - b.epoch);
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

        <Masonry>
          {
            this.state.articlesRecipes.map((articleRecipe, i) => {
              return (
                <div className="blog_grd_item" key={i}>
                  <div>
                    <img src={process.env.REACT_APP_API_PUBLIC_URL + articleRecipe.poster} alt={articleRecipe.title} /><br />
                  </div>

                  <div>
                    <h2>{articleRecipe.title}</h2>
                  </div>

                  <div>
                    {articleRecipe.excerpt}
                  </div>
                </div>
              );
            })
          }
        </Masonry>
      </div>
    );
  }
}
