import React, { useEffect, useState } from "react";
import IngredientTable from "../components/IngredientTable";
import axios from "axios";
import "./ingredient.css";
import Footer from "../components/Footer";

const Ingredient = () => {
  const [ingredients, setIngredients] = useState("");
  const [maxCalories, setMaxCalories] = useState(100000);
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/ingredients");
        // const data = await response.data;
        setData(response.data);
      } catch (error) {
        console.error("error fetching HTML:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div class="container">
        <div class="greeting-section">
          <h1 class="mt-3">Welcome to Flavor Exchange's Ingredient Database!</h1>
          <p class="lead">
            Discover a world of delightful flavors and ingredients, Search for your favorite ingredients below!
          </p>
        </div>
      </div>
      <br />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <input
              type="text"
              placeholder="Search for Ingredient Name..."
              className="form-control"
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div class="col-sm">
            <input
              type="number"
              step="1"
              placeholder="Enter Max Calorie Range..."
              className="form-control"
              onChange={(e) => setMaxCalories(parseInt(e.target.value))}
            />
          </div>
          <div class="col-sm">
            <input
              type="text"
              placeholder="Search for Ingredient Category..."
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
      </div>
      <br />
      <div class="col-md-12">
        <IngredientTable
          data={data.filter(
            (data) =>
              data.name.toLowerCase().includes(ingredients) &&
              data.calories_per_unit <= maxCalories &&
              data.category.toLowerCase().includes(category)
          )}
        />

      </div>
      <Footer />
    </>
  );
};

export default Ingredient;
