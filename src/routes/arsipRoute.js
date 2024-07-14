const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload')
const arsipController = require('../controllers/arsipController')

router.get('/', arsipController.getAllArsip);
router.post('/', upload.single('file'), arsipController.createArsip);
router.get('/file/uploads/:fileName', arsipController.getFile);
router.delete('/:id', arsipController.deleteArsip);
router.get('/:id', arsipController.getArsipById);
router.put('/:id', upload.single('file'), arsipController.editArsip);

module.exports = router;