const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {

    Movies.find().select("title")
    .then((response) => {
      console.log(response)
      response.forEach((eachMovie) => {
        eachMovie.title 
      })
      res.render("movies.hbs", {
        movies : response
      })
  
    })
    .catch((err) => {
      next(err)
    })
  })

  router.get("/movie/:movieId", (req, res, next) => {

    console.log(req.params) 
    const {movieId} = req.params
    console.log(movieId)
  
    Movies.findById(movieId)
    .then((oneMovie) => {
  
      res.render("details.hbs", {
        oneMovie
      })
  
    })
    .catch((err) => {
      next(err)
    })
  })


module.exports = router;
