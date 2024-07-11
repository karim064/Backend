const express = require('express');
const router = express.Router();
const arsipController = require('../controllers/arsipController');
const upload = require('../middleware/upload')

router.get('/', arsipController.getAllArsip);
router.post('/', upload.single('file'), arsipController.createArsip);
router.get('/file/:fileName', arsipController.getFile);

module.exports = router;