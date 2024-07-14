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

exports.deleteKategori = async (req, res) => {
    try {
      const { id } = req.params; // Mengambil id dari parameter URL
      await kategoriService.deleteKategori(id);
      responseMessage(res, 200, `Kategori dengan id ${id} berhasil dihapus`);
    } catch (error) {
      responseMessage(res, 500, 'Gagal menghapus kategori'); // Menangani kesalahan dalam penghapusan kategori
    }
  };

  exports.updateKategori = async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, keterangan } = req.body;
      const updatedKategori = await kategoriService.updateKategori(id, { nama, keterangan });
      responseData(res, 200, updatedKategori);
    } catch (error) {
      responseMessage(res, 500, 'Gagal mengupdate kategori');
    }
  };


  exports.getKategoriById = async (req, res) => {
    try {
      const { id } = req.params;
      const kategori = await kategoriService.getKategoriById(id);
      if (kategori) {
        responseData(res, 200, kategori);
      } else {
        responseMessage(res, 404, 'Kategori tidak ditemukan');
      }
    } catch (error) {
      responseMessage(res, 500, 'Gagal mengambil kategori');
    }
  };