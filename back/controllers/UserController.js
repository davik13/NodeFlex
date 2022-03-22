const User = require('../models/UserModel')
const CryptoJS = require('crypto-js')

//GET ALL USER
exports.FindAll = async (req, res) => {
  const query = req.query.new
  // if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find()
            .sort({ _id: -1 })
            .limit(5)
        : await User.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error)
    }
  // } else {
  //   res
  //     .status(403)
  //     .json({ message: 'vous netes pas autorisé à voir les users' })
  // }
}

//GET USER
exports.FindById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {
    res.status(500).json(error)
  }
}

//GET USER STATs
exports.FindUserStats = async (req, res) => {
  const today = new Date()
  const lastYear = today.setFullYear(today.getFullYear() - 1)

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' }
        }
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 }
        }
      }
    ])
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

//DELETE
exports.Delete = async (req, res) => {
  if (req.user.id == req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json('user has been deleted')
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('you can delete only your account')
  }
}

//UPDATE
exports.Update = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      if (!req.body) {
        return res.status(400).send({ message: 'All fields are required' })
      }
      if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString()
      }

      const updateUser = await User.findbyIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      ).then(user => {
        if (!user) {
          return res
            .status(404)
            .send({ message: 'user not found' + req.params.id })
        }
      })
      res.status(200).json(updateUser)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('you can update only your account')
  }
}
