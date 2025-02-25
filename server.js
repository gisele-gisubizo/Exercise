import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import mainRouter from './Routes/indexRouting.js';
import indexRouter from './Routes/indexRouter.js'
// const express = require('express');
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use('/',mainRouter);
app.use('/',indexRouter)

//variables that hold vvalues inside the .env file
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const port = process.env.PORT || 3000;
const db_pass = process.env.DB_PASS;



//copied codes
const dbUri =`mongodb+srv://${db_user}:${db_pass}@cluster0.el91e.mongodb.net/${db_name}`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });