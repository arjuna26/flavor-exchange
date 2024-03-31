import React from "react";
import { Link } from "react-router-dom";
import "./recipeStyle.css";

const RecipeTable = ({ data }) => {
  return (
    <>
      <div class="container">
        <h2 class="mb-4">All Recipes:</h2>

        <div class="card-deck">
          {data.map((item) => (
            <>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{item.recipe_name}</h5>
                  <p class="card-text">Instructions: {item.instructions}</p>
                  <Link
                    to={`/addReview/${item.recipe_id}`}
                    type="button"
                    class="btn btn-primary"
                  >
                    Add Review
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeTable;