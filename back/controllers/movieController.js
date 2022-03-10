const Movie = require('../models/MovieModel.js')

// GET ALL
exports.findAll = async (req, res) => {
  if (req.query.user.isAdmin) {
    try {
      const movies = await Movie.find()
      res.status(200).json(movies.reverse())
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json("tu n'es pas authoriser")
  }
}

//GET MOVIE
exports.findOne = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.status(200).json(movie)
  } catch (err) {
    res.status(500).json(err)
  }
}

//GET RANDOM MOVIES

exports.randomMovie = async (req, res) => {
  const type = req.query.type
  let movie
  try {
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeriess: true } },
        { $sample: { size: 1 } }
      ])
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeriess: false } },
        { $sample: { size: 1 } }
      ])
    }
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

//CREATE MOVIE
exports.create = async (req, res) => {
  const newMovie = new Movie(req.body)
  try {
    const savedMovie = await newMovie.save()
    res.status(201).json(savedMovie)
  } catch (err) {
    res.status(500).json(err)
  }
}

//UPDATE MOVIE
exports.update = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      )
      res.status(200).json(updatedMovie)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json("Vous n'êtes pas administrateur")
  }
}

//DELETE MOVIE
exports.delete = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id)
      res.status(200).json('Le film a bien été supprimé')
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
