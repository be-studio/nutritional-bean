import React, { Component } from "react";
import axios from "axios";


export class BlogMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "all",
      categories: [],
      recipeCategory: "all",
      recipeCategories: [],
      filterRecipes: false,
      activeLinkStyle: {
        borderBottom: "1px solid #57ab53"
      },
      inactiveLinkStyle: {
        border: 0
      },
      activeRecLinkStyle: {
        color: "#57ab53"
      },
      inactiveRecLinkStyle: {
        color: "#2c3042"
      }
    };
  }


  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
      withCredentials: true
    })
    .then(() => this.getBlogCategories())
    .then(() => this.getRecipeCategories())
    .catch(() => alert("There has been a problem retrieving the blog categories. Please try again later."));
  }


  getBlogCategories() {
    axios.get(process.env.REACT_APP_API_URL + "/blog/categories", {
      withCredentials: true
    })
    .then(response => {
      const categories = response.data;

      const menu = categories.map(cat => cat.name);

      this.setState({
        categories: menu
      });
    })
    .catch(() => alert("There has been a problem retrieving the blog categories. Please try again later."));
  }


  getRecipeCategories() {
    axios.get(process.env.REACT_APP_API_URL + "/recipes/categories", {
      withCredentials: true
    })
      .then(response => {
        const categories = response.data;

        const menu = categories.map(cat => cat.name);

        this.setState({
          recipeCategories: menu
        });
      })
      .catch(() => alert("There has been a problem retrieving the recipe categories. Please try again later."));
  }


  getBlogArticlesByCategory(category) {
    axios.get(process.env.REACT_APP_API_URL + "/utility/csrf", {
        withCredentials: true
      })
      .then(() => {
        axios.get(process.env.REACT_APP_API_URL + "/blog/category/" + category, {
          withCredentials: true
        })
          .then(response => {
            console.log(response.data);
          })
          .catch();

      })
      .catch();
  }


  sendCategory(category, recipeCategory) {
    const filterRecipes = category == "recipes";

    this.setState({
      category,
      recipeCategory,
      filterRecipes
    });

    this.props.callback(category, recipeCategory);
  }


  render() {
    if(!this.state.categories) {
      return (
        <></>
      );
    }

    const recipeFiltersMenu = (
      <ul className="blog-menu_lst_recipe-filters">
        <li>Filter:</li>
        <li><a href="#" onClick={() => this.sendCategory("recipes", "all")} style={this.state.recipeCategory == "all" ? this.state.activeRecLinkStyle : this.state.inactiveRecLinkStyle}>All</a></li>
        {
          this.state.recipeCategories.map(cat => (
            <li><a href="#" onClick={() => this.sendCategory("recipes", cat)} style={this.state.recipeCategory == cat ? this.state.activeRecLinkStyle : this.state.inactiveRecLinkStyle}>{cat}</a></li>
          ))
        }
      </ul>
    );

    const recipeFilters = this.state.recipeCategories && this.state.filterRecipes ?  recipeFiltersMenu : (<></>);

    return(
      <div className="blog-menu_ctr">
        <ul className="blog-menu_lst_filters">
          <li><a href="#" onClick={() => this.sendCategory("all", "all")} style={this.state.category == "all" ? this.state.activeLinkStyle : this.state.inactiveLinkStyle}>All</a></li>
          {
            this.state.categories.map(cat => (
              <li><a href="#" onClick={() => this.sendCategory(cat, "all")} style={this.state.category == cat ? this.state.activeLinkStyle : this.state.inactiveLinkStyle}>{cat}</a></li>
            ))
          }
          <li><a href="#" onClick={() => this.sendCategory("recipes", "all")} style={this.state.category == "recipes" ? this.state.activeLinkStyle : this.state.inactiveLinkStyle}>Recipes</a></li>
        </ul>

        {recipeFilters}
      </div>
    );
  }
}
