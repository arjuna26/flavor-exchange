import React from "react";

const FeaturedRecipes = ( {data} ) => {
  return (
    <div class="container">
      <h2 class="mb-4">Featured Recipes</h2>

      <div class="row">
        {data.map((item) => (
          <>
            <div key={item.recipe_id} class="col-md-4">
              <div class="card mb-4">
                <img
                  src="https://cleanfoodfacts.com/app/uploads/2021/02/Nuggs-Original-Plant-Based-Chicken-Nuggets-300x300.jpg"
                  class="card-img-top"
                  alt="Recipe Image"
                />
                <div class="card-body">
                  <h5 class="card-title">{item.recipe_name}</h5>
                  <p class="card-text">
                    Average Score out of 5: {item.average_rating}
                  </p>
                  <p class="card-title">Rating: {item.rating_category}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
