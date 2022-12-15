import React from "react";
import AllRecipe from "./pages/AllRecipe";
import AddNew from "./pages/AddNew";
import axios from "axios";

export default class RecipeBookAPI extends React.Component {
  //if current page is add -->
  //if current page is listings -->
  //make some mock data
  //set id to mongodb style . using _id
  state = {
    page: "list",
    data: [
    ],
    newRecipeTitle: "", //base holding state for Add New
    newRecipeIngredients: ""
  };

  BASE_API_URL = "https://simple-recipe-api-aw6p.onrender.com";
  
  //part whereby API calls are placed here
  async componentDidMount(){
    console.log(`ComponentDidMount`);
    const response = await axios.get(`${this.BASE_API_URL}/recipes`);
    console.log(response.data);
    this.setState({
      data: response.data
    })
  }

  //function that remembers the visuals
  //remember JSX rendering doesn't support if..else in the return
  //hence we place in a function here
  renderPage() {
    if (this.state.page === "list") {
      return <AllRecipe recipes={this.state.data} />;
    } else if (this.state.page === "add") {
      return <AddNew 
        update={this.updateFormField}
        title={this.state.newRecipeTitle}
        ingredients={this.state.newRecipeIngredients}
        add={this.addNew}
      />;
    }
  }

  //arrow function that handles the current page
  //updates the state of the current page itself
  //this will eventually affect the rendering of the content due to renderPage
  //param: page
  //list: list all recipes
  //add: Add new recipe
  switchPage = (page) => {
    this.setState({
      page: page,
    });
  };

  //deal with form names and set the properties
  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addNew = async () => {
    console.log(`Add New Recipe`);
    //base temp recipe
    const newRecipe = {
        //_id: Math.round(Math.random()* 10000 + 1), //let mongodb give an id
        title: this.state.newRecipeTitle,
        ingredients: this.state.newRecipeIngredients.split(",")//split based a comma and insert into an array
    }

    const response = await axios.post(this.BASE_API_URL + "/recipes", newRecipe);
    newRecipe._id = response.data.insertedId;
    
    this.setState({
        data: [...this.state.data, newRecipe],
        page: "list",
        newRecipeTitle: "",
        newRecipeIngredients: "",
    })
    console.log(`New Recipe Added: ${response.data.insertedId}`);


  }

  render() {
    return (
      <React.Fragment>
        <h1>Recipe Book</h1>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => this.switchPage("list")}
                  >
                    List Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => this.switchPage("add")}
                  >
                    Add New
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>{this.renderPage()}</div>
      </React.Fragment>
    );
  }
}
