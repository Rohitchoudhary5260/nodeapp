const express = require("express");
const router = express.Router();

router.get("/popular", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
          accept: "application/json",
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;