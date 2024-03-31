import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const AddReview = () => {
  const [recipeName, setRecipeName] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:8000/addReview/"+id)
        .then((response) => {
          setRecipeName(response.data[0].recipe_name)
        })
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/addReview/"+id, {reviewRating, reviewComment})
    .then(res =>{
      if(res.data.updated) {
        navigate('/recipes')
      } else {
        console.log("not updated")
      }
    })
  }


  return (
    <>
      <div className="container mt-5">
        <h1>Add Review For { recipeName } </h1>
        <form onSubmit={ handleSubmit }>
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Enter Rating
            </label>
            <input
              type="number"
              step="1"
              className="form-control"
              id="input1"
              placeholder="0 ... 5"
              onChange={(e) => setReviewRating(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input2" className="form-label">
              Enter Review
            </label>
            <input
              type="text"
              className="form-control"
              id="input2"
              placeholder="100 Character Limit..."
              onChange={(e) => setReviewComment(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default AddReview;