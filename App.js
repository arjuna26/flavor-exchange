import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componenet imports
import NavBar from "./components/NavBar.js";

// Pages imports
import Home from "./pages/home.js";
import Update from "./pages/update.js";
import Recipes from "./pages/recipes.js";
import Ingredient from "./pages/ingredient.js";
import IngredientUpdate from "./pages/IngredientUpdate.js";
import AddReview from "./pages/AddReview.js";
import DeleteIngredient from "./pages/DeleteIngredient.js";


function App() {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=yes"
          />
        </head>
        <body>
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/contact" element={<Update />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/recipes" element={<Recipes />} />
              <Route exact path="/ingredient" element={<Ingredient />} />
              <Route exact path='/updateIngredient/:id' element={<IngredientUpdate />} />
              <Route exact path='/addReview/:id' element={<AddReview/>} />
              <Route exact path='/deleteIngredient/:id' element={<DeleteIngredient />} />
            </Routes>
          </Router>
        </body>
      </html>
    </>
  );
}

export default App;
