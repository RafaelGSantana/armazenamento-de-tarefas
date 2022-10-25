require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/tasksRoute');

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Connect application to the database in mongoDB
mongoose
   .connect(process.env.MONGODB_URL)
   .then(() => console.log('MongoDB connected.'))
   .catch((err) => console.log(err));

app.listen(PORT, console.log("App listening on port: " + PORT))