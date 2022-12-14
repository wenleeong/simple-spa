//this does all the UI rendering of all recipes
import React from "react";
import RecipeItem from "../components/RecipeItem";

export default function AllRecipe(props) {
  return (
    <React.Fragment>
      <h1>All Recipe</h1>

      {props.recipes.map((eachRecipe) => {
        return (
          <RecipeItem
            key={eachRecipe._id}
            id={eachRecipe._id}
            title={eachRecipe.title}
            ingredients={eachRecipe.ingredients}
          />
        );
      })}
    </React.Fragment>
  );
}
