const jwt = require('jsonwebtoken')

const verify = (req, res, next) => {
  next()
}
// const authHeader = req.headers.token
// if (authHeader) {
//   const token = authHeader.split(' ')[1]

//   jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
//     if (error) res.status(403).json({ message: 'Invalid token' })
//     req.user = user
//     next()
//   })
// } else {
//   return res.status(401).json({ message: 'you are not authenticated' })
// } @todo

module.exports = verify
