const express = require('express');
const Legend = require('./legends.model')
const upload = require("../../middlewares/file");
// const { deleteFile } = require('../../middlewares/deleteFile');
// const { isAuth, isAdmin } = require('../../middlewares/auth');
const router = express.Router();

//* FUNCION QUE RECOGE TODOS LOS PERSONAJES
router.get('/', async(req, res) => {
  try {
    const allLegends = await Legend.find();
    return res.status(200).json(allLegends);
  } catch(error) {
    return res.status(500).json('Error en el servidor');
  }
});

module.exports = router;