import React, { useEffect, useState } from "react";
import axios from "axios";

import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import FeaturedContent from "../components/FeaturedContent";
import FeaturedRecipes from "../components/FeaturedRecipes";

const Home = () => {
  const [featuredIngredients, setFeaturedIngredients] = useState([]);
  const [fancyRecipe, setFancyRecipe] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/featuredContent")
        setFeaturedIngredients(response.data)
      } catch(error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/fancyRecipes");
        setFancyRecipe(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
    

  return (
    <>
      <LandingPage />
      <br/>
      <FeaturedRecipes data = {fancyRecipe} />
      <FeaturedContent data={featuredIngredients}/>
      <Footer />
    </>
  );
};

export default Home;
