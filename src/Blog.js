import React, { Component } from "react";
import axios from "axios";

import { Title } from "./Title";
// import { Masonry } from "./Masonry";
import MasonryInfiniteScroller from "react-masonry-infinite";

export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null,
      recipes: null,
      articlesRecipes: null,
      page: 1,
      moreToLoad: false,
      loadedArticlesRecipes: [],
      errorMsg: "There has been a problem retrieving data for the blog. Please try again later."
    }
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

        let loadedArticlesRecipes = [];
        let maxIndex;

        if(this.state.articlesRecipes.length <= 3) {
          maxIndex = this.state.articlesRecipes.length;
          this.setState({
            moreToLoad: false
          });
        } else {
          maxIndex = 3;
          this.setState({
            moreToLoad: true
          });
        }

        for(let i = 0; i < maxIndex; i++) {
          loadedArticlesRecipes.push(this.state.articlesRecipes[i]);
        }

        this.setState({
          loadedArticlesRecipes: loadedArticlesRecipes
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


  loadMoreArticlesRecipes(page) {
    this.setState({
      page: page
    });

    let maxIndex;
    if(this.state.articlesRecipes.length <= (page * 3)) {
      maxIndex = this.state.articlesRecipes.length;
      this.setState({
        moreToLoad: false
      });
    } else {
      maxIndex = page * 3;
      this.setState({
        moreToLoad: true
      });
    }

    let loadedArticlesRecipes = this.state.loadedArticlesRecipes;
    for(let i = page * 3 - 3; i < maxIndex; i++) {
      loadedArticlesRecipes.push(this.state.articlesRecipes[i]);
    }
    this.setState({
      loadedArticlesRecipes: loadedArticlesRecipes
    });
  }


  render() {
    if(!this.state.loadedArticlesRecipes) {
      return (
        <div></div>
      );
    }

    return (
      <div className="blog_ctr">
        <Title page="Blog" />

        <MasonryInfiniteScroller initialLoad={false} pageStart={1} hasMore={this.state.moreToLoad} loadMore={this.loadMoreArticlesRecipes.bind(this)} sizes={[{ columns: 2, gutter: 20 }]} threshold={200} pack={true}>
          {
            this.state.loadedArticlesRecipes.map(articleRecipe => {
              return (
                <div className="blog_grd_item">
                  <div>
                    <img src={process.env.REACT_APP_API_PUBLIC_URL + articleRecipe.poster} /><br />
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
        </MasonryInfiniteScroller>
      </div>
    );
  }
}
