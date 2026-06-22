const express = require("express");
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Popular Movies
router.get("/popular", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
    });
  }
});

// Movie Details
router.get("/movie/:id", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${TMDB_API_KEY}`
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch movie details",
    });
  }
});

// Search Movie
router.get("/search/:query", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${req.params.query}`
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Search failed",
    });
  }
});

module.exports = router;