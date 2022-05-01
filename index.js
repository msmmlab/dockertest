const express = require("express");
const mongoose = require("mongoose");
const knex = require("knex");

mongoose
    .connect("mongodb://djerq:password@mongo:27017/?authSource=admin")
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log(e));

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h2>Cheers from QLD!</h2>");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`);
});
