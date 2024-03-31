import React from "react";

const FeaturedContent = ( { data } ) => {
  
    return (
      <>
        <div class="container">
          
          <h2 class="mb-4 mt-5">Featured Ingredients</h2>

          <div class="row">
          {data.map (( item ) => (
          <>
            <div key={item.ingredient_id} class="col-md-4">
              <div class="card mb-4">
                <img
                  src="https://cleanfoodfacts.com/app/uploads/2021/02/Nuggs-Original-Plant-Based-Chicken-Nuggets-300x300.jpg"
                  class="card-img-top"
                  alt="Ingredient Image"
                />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">
                    Category: {item.category}
                  </p>
                  <p class="card-title">
                    Calories: {item.calories_per_unit}
                  </p>
                </div>
              </div>
            </div>
            </>
          ))}
            
          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </>
    );

};

export default FeaturedContent;