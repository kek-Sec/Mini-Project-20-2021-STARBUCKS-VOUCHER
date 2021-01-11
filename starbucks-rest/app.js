const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');

const dotenv = require("dotenv")

dotenv.config()

app.use('*', cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));


//import routes
const ProjectItemsRoute = require("./routes/Project_items");

const { debug } = require('dotenv/lib/env-options');

app.use('/project_items', ProjectItemsRoute);

//connect to db
    const _database = "mongodb://" + process.env.MMMUSER + ':' + process.env.PASSWORD + '@'+ process.env.IP +":27017/starbucks?authSource=admin";
    mongoose.connect(_database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to Mongo`DB ...'))
    .catch(err => console.error('Could not connect to MongoDB:‌', err));


app.listen(3000);