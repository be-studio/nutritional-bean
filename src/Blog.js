import React, { Component } from "react";
import axios from "axios";


export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null,
      recipes: null,
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


      })
      .catch(() => alert(this.state.errorMsg));
    })
    .catch(() => alert(this.state.errorMsg));
  }


  render() {
    return (
      <div className="blog_ctr">
        Blog
      </div>
    );
  }
}
