const express = require('express');
const router = express.Router();
const kategoriController = require('../controllers/kategoriController');

router.get('/', kategoriController.getAllKategori);
router.get('/:id', kategoriController.getKategoriById);
router.post('/', kategoriController.createKategori);
router.delete('/:id', kategoriController.deleteKategori);
router.put('/:id', kategoriController.updateKategori);

module.exports = router;