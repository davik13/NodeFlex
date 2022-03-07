const Movie = require("../models/Movie.js");

exports.findAll = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
};