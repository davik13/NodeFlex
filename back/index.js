const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Db Connection Successfull"))
    .catch((err) => {
        console.error(err);
    });

    app.use(express.json());

    app.listen(process.env.PORT || 5000, ()=> {
        console.log("Server is running ")
    });