import { config } from 'process';

const express = require('express');
const mangoose = require('mangoose');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const logger = require('./middlewares/logger');
const os = require('/middlewares/logger');
require('dotenv'),config();

const app = express();
const PORT =8080;

app.use(express.json());
app.use(logger);

mangoose.connect('mangodb://localhost:27017/emphermockone', {useNewUrlParser:true, useUnifiedTopology: true })
.then(() => console.log('Connected to MangoDB'))
