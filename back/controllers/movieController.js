const Movie = require("../models/MovieModel.js");

exports.findAll = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.findOne = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
      res.status(403).json("Vous n'êtes pas administrateur");
    }
};

exports.update = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Vous n'êtes pas administrateur");
    }
};

exports.delete = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Le film a bien été supprimé");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Vous n'êtes pas administrateur");
    }
};