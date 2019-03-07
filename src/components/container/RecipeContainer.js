import { connect } from "react-redux";
import React, { Component } from "react";
import Recipe from "../Recipe";

class RecipeContainer extends Component {
  render() {
    return (
      <div className="recipe-list-container">
        {this.props.recipes.map(recipeItem => {
          return (
            <Recipe recipe={recipeItem.recipe} key={recipeItem.recipe.uri} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipeContainer);
