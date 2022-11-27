const mongoose = require('mongoose');
require("dotenv").config();

// Ruta de la base de datos.
const DB_URL = process.env.DB_URL;
console.log(DB_URL);
if (!DB_URL) throw new Error('No se encuentra la URL a la base de datos');

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`successfully connected to data base: ${name} en ${host}`);
  } catch(error) {
    console.log('Error connecting to database:', error);
  }
};

module.exports = {
  connectDb,
  DB_URL,
}