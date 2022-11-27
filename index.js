const express = require('express');
//Aqui irán las rutas
const indexRoutes = require('./src/api/index/index.routes');
const legendsroutes = require('./src/api/legends/legends.routes');

const cors = require("cors");
require("dotenv").config();
const db = require('./src/utils/database/db');
const cloudinary = require("cloudinary").v2;

db.connectDb();
 
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const server = express();
const PORT = 3000;

server.use(cors({
  origin: "*", 
  credentials: true
}))

/* server.use(cors()); */

server.use(express.json());

server.use(express.urlencoded());

// rutas
server.use('/', indexRoutes);
server.use('/legends', legendsroutes);

server.listen(PORT, () => {
  console.log(`Server working on http://localhost:${PORT}`);
});