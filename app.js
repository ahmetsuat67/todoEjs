"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.set("view engine", "ejs");
app.set("views", "./public");
/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())

app.all('/', (req, res) => {
    res.render('index')
})
// Router:

app.use('/view', require('./app/routes/todoTemplate'))
app.use('/api', require('./app/routes/todo'))

// DatabaseConnection:
const { dbConnection } = require('./app/dbConnection')
dbConnection() // sequelize.sync() must run after model defines.

// errorHandler (Catch Errors):
app.use(require('./app/errorHandler'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));