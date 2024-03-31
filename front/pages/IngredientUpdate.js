import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const IngredientUpdate = () => {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientCategory, setIngredientCategory] = useState('');
  const [ingredientCal, setIngredientCal] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
        try {
          await axios.get("http://localhost:8000/updateIngredient/" + id)
          .then((response) => {
            setIngredientName(response.data[0].name);
            setIngredientCategory(response.data[0].category);
            setIngredientCal(response.data[0].calories_per_unit);
        })
        } catch (error) {
          console.log(error)
        }
      };
    fetchData();
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/updateIngredient/"+id, {ingredientName, ingredientCategory, ingredientCal})
    .then(res => {
      if(res.data.updated) {
        navigate('/ingredient')
      } else {
        alert("not updated")
      }
    })
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Update Ingredient Here</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Enter Ingredient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="input1"
              placeholder={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input2" className="form-label">
              Enter Ingredient Category
            </label>
            <input
              type="text"
              className="form-control"
              id="input2"
              placeholder={ingredientCategory}
              onChange={(e) => setIngredientCategory(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input3" className="form-label">
              Enter Calories per Unit
            </label>
            <input
              type="number"
              step="1"
              className="form-control"
              id="input3"
              placeholder={ingredientCal}
              onChange={(e) => setIngredientCal(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default IngredientUpdate;
