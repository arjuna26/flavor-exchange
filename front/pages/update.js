import axios from "axios";
import { useNavigate } from "react-router";
import React, { useState } from "react";

const Update = () => {

  const [ingredientName, setName] = useState('');
  const [ingredientCategory, setCat] = useState("");
  const [ingredientCals, setCals] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/addIngredient", {ingredientName, ingredientCategory, ingredientCals})
    .then((response) => {
      if(response.data.updated) {
        alert("Ingredient has been added.")
        navigate("/ingredient")
      } else {
        alert("Could not add this Ingredient, possibly a duplicate")
        navigate("/ingredient");
      }
    })
  }
  
  return (
    <>
      <div class="container">
        <h2>Add Ingredient</h2>

        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <input
              type="text"
              class="form-control"
              id="category" 
              placeholder="Enter category"
              required
              onChange={(e) => setCat(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="description">Calories per Unit</label>
            <input
              type="number"
              class="form-control"
              step="1"
              id="calories"
              placeholder="Enter Calories per Unit"
              required
              onChange={(e) => setCals(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
};

export default Update;
