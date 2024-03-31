import React, { useEffect, useState } from "react";
import RecipeTable from "../components/RecipeTable"
import axios from "axios";
import "./ingredient.css";
import Footer from "../components/Footer";

const Recipes = () => {
  const [recipeName, setRecipeName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getRecipes");
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
          <h1 className="mt-3">Welcome to Flavor Exchange's Recipes Database!</h1>
          <p class="lead">
            Find a Wide Variety of Classic Recipes Below!
          </p>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <input
              type="text"
              placeholder="Search for Recipe Name..."
              className="form-control"
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <br />
      <div class="col-md-12">
        <RecipeTable
          data={data}
        />

      </div>
      <Footer />
    </>
  );
};

export default Recipes;
