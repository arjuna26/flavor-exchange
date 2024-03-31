import React, { useState, useEffect } from "react";
import "./delete.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeleteIngredient = () => {
    const { id } = useParams();
    const [ingredientName, setIngredientName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get("http://localhost:8000/deleteIngredient/" + id)
                .then((response) =>{
                    setIngredientName(response.data[0].name);
                })
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    });

    const navigate = useNavigate();

    const handleClick = (e) => { 
        e.preventDefault();
        axios.delete("http://localhost:8000/deleteIngredient/" + id, {ingredientName})
        .then(res => {
            if(res.data.updated) {
                navigate('/ingredient')
            } else {
                alert("not updated")
                navigate('/ingredient')
            }
        })
    }
    
    return (
    <>
      <div class="container confirmation-container">
        <div class="confirmation-message">
          <h2>Are you sure you want to delete {ingredientName} ?</h2>
        </div>

        <div class="text-center">
          <Link
            to="/deleteIngredient"
            type="button"
            class="btn btn-danger btn-confirm"
            onClick={ handleClick }
          >
            Yes, Delete
          </Link>
          <Link
            to="/ingredient"
            type="button"
            class="btn btn-secondary btn-cancel"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeleteIngredient;
