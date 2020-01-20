import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios";

import { Blog } from "./Blog";

// noinspection JSUndefinedPropertyAssignment
global.scroll = jest.fn();
jest.mock("axios");
configure({ adapter: new Adapter() });


describe("Blog component", () => {
  let blog;
  let articles;
  let recipes;

  beforeEach(() => {
    blog = new Blog();

    window.alert = () => {};

    articles = [
      {
        title: "Article 1",
        permalink: "article1",
        excerpt: "foo",
        poster: "poster.jpg",
        updated_at: "2020-01-01 12:00:00",
        categories: [
          {
            name: "Cat"
          },
          {
            name: "Dog"
          }
        ]
      },
      {
        title: "Article 2",
        permalink: "article2",
        excerpt: "bar",
        poster: "poster.jpg",
        updated_at: "2020-01-02 12:00:00",
        categories: [
          {
            name: "Cat"
          },
          {
            name: "Dog"
          }
        ]
      },
    ];

    recipes = [
      {
        title: "Recipe 1",
        permalink: "recipe1",
        excerpt: "foo",
        poster: "poster.jpg",
        updated_at: "2020-01-03 12:00:00"
      },
      {
        title: "Recipe 2",
        permalink: "recipe2",
        excerpt: "bar",
        poster: "poster.jpg",
        updated_at: "2020-01-04 12:00:00"
      }
    ]
  });


  test("should ask window to the scroll to the top", () => {
    shallow(<Blog />);

    // noinspection JSCheckFunctionSignatures
    const spy = jest.spyOn(global, "scroll");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(0, 0);
  });


  test("should request to get all blog articles/recipes on component load", () => {
    // noinspection ES6ModulesDependencies,ES6ModulesDependencies,JSCheckFunctionSignatures
    const spy = jest.spyOn(Blog.prototype, "getBlogArticlesRecipes");
    shallow(<Blog />);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("all");
  });


  test("should call API to get data", async () => {
    const data = {
      articles
    };
    // noinspection JSCheckFunctionSignatures
    axios.get.mockResolvedValue(data);
    const wrapper = shallow(<Blog />);

    await wrapper.instance().downloadBlogArticlesRecipes("foo", "bar");

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_API_URL + "foo", {
      withCredentials: true
    });
  });


  test("should get data from server", () => {
    const data = {
      articles
    };

    // noinspection JSCheckFunctionSignatures
    axios.get = jest.fn().mockResolvedValue(data);

    return axios.get("foo").then(response => expect(response).toEqual(data));
  });


  test("it should process blog articles ready for display", () => {
    const processed = blog.processBlogArticlesRecipes(articles);

    expect(processed).toEqual([
      {
        title: "Article 2",
        permalink: "article2",
        excerpt: "bar",
        poster: "poster.jpg",
        updated: "2020-01-02 12:00:00",
        epoch: 1577966400000,
        categories: "Cat, Dog - ",
        type: "article"
      },
      {
        title: "Article 1",
        permalink: "article1",
        excerpt: "foo",
        poster: "poster.jpg",
        updated: "2020-01-01 12:00:00",
        epoch: 1577880000000,
        categories: "Cat, Dog - ",
        type: "article"
      }
    ]);
  });


  test("it should process recipes ready for display", () => {
    const processed = blog.processBlogArticlesRecipes(null, recipes);

    expect(processed).toEqual([
      {
        title: "Recipe 2",
        permalink: "recipe2",
        excerpt: "bar",
        poster: "poster.jpg",
        updated: "2020-01-04 12:00:00",
        epoch: 1578139200000,
        categories: "Recipe - ",
        type: "recipe"
      },
      {
        title: "Recipe 1",
        permalink: "recipe1",
        excerpt: "foo",
        poster: "poster.jpg",
        updated: "2020-01-03 12:00:00",
        epoch: 1578052800000,
        categories: "Recipe - ",
        type: "recipe"
      }
    ]);
  });


  afterEach(() => {
    jest.clearAllMocks();
  });
});
