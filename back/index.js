const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const config = require("./config.json");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// function to grab all ingredients from database -----------------------------------------------------

// create query to grab ingredients

ingredientQuery = "SELECT * FROM Ingredients ";

app.get("/ingredients", function (req, res) {
  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();

  cn.query(ingredientQuery, function (err, result, fields) {
    if (err) {
      console.log(err);
    }

    res.json(result);
  });
  cn.end();
});

// -------------------------------------------------------------------------------------------------------

app.get("/featuredContent", function (req, res) {
  // query to get ingredient id, name, & category
  const featuredContentQuery = "SELECT * FROM Ingredients ORDER BY RAND() LIMIT 3";

  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();

  cn.query(featuredContentQuery, function (err, result, fields) {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
  cn.end();
});

// ---------------------------------------------------------------------------------------------------------

// function to grab recipes and display
app.get("/getRecipes", function (req, res){
  const getRecipesQ = "SELECT * FROM Recipes";
  // create connection to database
   const cn = mysql.connect(config);
   cn.connect();

   cn.query(getRecipesQ, function (err, result){
    if (err) {
      console.log(err);
    }
    res.json(result)
   });
   cn.end();
})

// ---------------------------------------------------------------------------------------------------------

// function used to update mysql database ingredient by id

app.get("/updateIngredient", (req, res) => {
  const sql = "SELECT * FROM Ingredients WHERE ingredient_id = ?";
  const id = req.params.id;

  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();
  cn.query(sql, [id], (err, result) => {
    if (err){
      console.log(err)
    }
    return res.json(result)
  });
  cn.end();
});

app.put("/updateIngredient/:id", (req, res) => {
  const sql = "UPDATE Ingredients SET `name` = ?, `category` = ?, `calories_per_unit` = ? WHERE `ingredient_id` = ?";

  // get ingredient id from URL
  const ingredient_id = req.params.id;

  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();

  cn.query(sql, [req.body.ingredientName, req.body.ingredientCategory, parseInt(req.body.ingredientCal), ingredient_id], (err, result) => {
    if(err) {
      console.log(err);
    }
    res.json({updated: true});
  })
  cn.commit();
  cn.end();
})

// ---------------------------------------------------------------------------------------------------------

// function to add a review
app.get("/addReview/:id", (req, res) => {
  const sql = "SELECT * FROM Recipes WHERE recipe_id = ?";
  const id = req.params.id;

  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();
  cn.query(sql, [id], (err, result) => {
    if (err){
      console.log(err)
    }
    return res.json(result)
  });
  cn.end();
});

// function to add a review
app.put("/addReview/:id", (req, res) => {
  const sql  = `INSERT INTO Reviews
                (
                  recipe_id, user_name, rating, comment
                )
                VALUES
                (
                  ?, ?, ?, ?
                )`;
  const id = req.params.id;
  const userName = "Anonymous";
  const reviewRating = req.body.reviewRating;
  const reviewComment = req.body.reviewComment;
  
  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();
  cn.query(sql, [id, userName, reviewRating, reviewComment], (err, result) => {
    if (err) {
      console.log(err);
    }  
    res.json({updated: true});
  });
  cn.commit();
  cn.end();
})

// ---------------------------------------------------------------------------------------------------------

// function to delete an ingredient
app.get("/deleteIngredient/:id", (req, res) => {
  const sql = "SELECT * FROM Ingredients WHERE ingredient_id = ?";
  const id = req.params.id;

  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();
  cn.query(sql, [id], (err, result) => {
    if (err){
      console.log(err)
    }
    return res.json(result)
  });
  cn.end();
});

app.delete("/deleteIngredient/:id", (req, res) => { 
  const sql = `DELETE FROM Ingredients WHERE ingredient_id = ?`;
  const id = req.params.id;

  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();
  cn.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
    }  
    res.json({updated: true});
  });
  cn.commit();
  cn.end();
})


// ---------------------------------------------------------------------------------------------------------

// function to add new ingredient to the database
app.post("/addIngredient", (req, res) =>{
  const sql = `INSERT INTO Ingredients
              (
                name, category, calories_per_unit
              )
              VALUES
              (
                ?, ?, ?
              )
              `;

  const ingredientName = req.body.ingredientName;
  const ingredientCategory = req.body.ingredientCategory;
  const ingredientCals = req.body.ingredientCals

  // create connection to database
  const cn = mysql.connect(config);
  cn.connect();
  cn.query(sql, [ingredientName, ingredientCategory, ingredientCals], (err, result) => {
    if (err) {
      console.log(err);
    }  
    res.json({updated: true});
  });
  cn.commit();
  cn.end();
  
})

// ---------------------------------------------------------------------------------------------------------

// function to convert ratings to strings based on their average
app.get("/fancyRecipes", (req, res) =>{
    const sql = `SELECT
                  r.recipe_id,
                  r.recipe_name,
                  ROUND(AVG(rev.rating), 1) AS average_rating,
                  CASE
                      WHEN AVG(rev.rating) >= 4.5 THEN 'Excellent'
                      WHEN AVG(rev.rating) >= 3.5 THEN 'Good'
                      WHEN AVG(rev.rating) >= 2.5 THEN 'Average'
                      WHEN AVG(rev.rating) >= 1.5 THEN 'Poor'
                      ELSE 'Very Poor'
                  END AS rating_category
              FROM
                  Recipes r
              LEFT JOIN
                  Reviews rev ON r.recipe_id = rev.recipe_id
              GROUP BY
                  r.recipe_id, r.recipe_name
              ORDER BY
                  average_rating DESC
              LIMIT 3;
              `
     // create connection to database
    cn = mysql.connect(config);
    cn.connect();
    cn.query(sql, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.json(result);
      }
    })
  })

// ---------------------------------------------------------------------------------------------------------

// start the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
