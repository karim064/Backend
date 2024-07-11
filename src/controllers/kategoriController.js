const kategoriService = require('../service/kategoriService');
const { responseData, responseMessage } = require('../utils/responHandler');

exports.getAllKategori = async (req, res) => {
  try {
    const kategori = await kategoriService.getAllKategori();
    responseData(res, 201, kategori);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createKategori = async (req, res) => {
  try {
    const { nama, keterangan } = req.body;
    const kategori = await kategoriService.createKategori({ nama, keterangan });
    responseData(res, 201, kategori);
  } catch (error) {
    responseMessage(res, 400, 'Invalid arsip data');
  }
};