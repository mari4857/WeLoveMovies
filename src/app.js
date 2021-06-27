if (process.env.USER) require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const moviesRouter = require("./movies/movies.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
