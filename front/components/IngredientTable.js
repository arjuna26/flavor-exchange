import React from "react";
import { Link } from "react-router-dom";

const IngredientTable = ({ data }) => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Category</th>
            <th scope="col">Calories per unit</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <>
              <tr key={item.ingredient_id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.calories_per_unit}</td>
                <td>
                  <Link
                    to={`/updateIngredient/${item.ingredient_id}`}
                    type="button"
                    class="btn btn-primary"
                  >
                    Update
                  </Link>
                </td>
                <td>
                <Link
                    to={`/deleteIngredient/${item.ingredient_id}`}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IngredientTable;
