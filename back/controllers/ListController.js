const List = require('../models/ListModel')

//CREATE

exports.Create = async (req, res) => {
  // if (req.user.isAdmin) { @todo
  const newList = new List(req.body)
  try {
    const savedList = await newList.save()
    res.status(201).json(savedList)
  } catch (error) {
    res.status(500).json(error)
  }
  // } else {
  //   res.status(403).json("vous n'etes pas autorisé")
  // }
}

//DELETE

exports.Delete = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id)
      res.status(201).json('La liste a été supprimée')
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('vous netes pas autorisé')
  }
}

//GET LIST

exports.Get = async (req, res) => {
  const typeQuery = req.query.type
  const genreQuery = req.query.genre
  let list = []
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } }
        ])
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } }
        ])
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }])
    }
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json('error')
  }
}
