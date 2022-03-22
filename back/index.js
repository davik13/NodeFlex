const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/UserRoute");
const authRoutes = require("./routes/AuthRoute");
const movieRoutes = require("./routes/MovieRoute");
const listRoutes = require("./routes/ListRoutes");
const cors = require("cors");
const bodyparser = require("body-parser");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Db Connection Successfull'))
  .catch(err => {
    console.error(err)
  })


  
    app.use(express.json());
    app.use(cors());
    app.use(bodyparser.urlencoded({extended: false}));
    app.use(bodyparser.json());
    

app.use('/api/users', userRoutes)
app.use('/api/', authRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/lists', listRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running ')
})
