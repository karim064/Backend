const arsipService = require("../service/arsipService");
const { responseData, responseMessage } = require("../utils/responHandler");
const path = require('path');
const fs = require('fs');

exports.getAllArsip = async (req, res) => {
  try {
    const arsip = await arsipService.getAllArsip();
    responseData(res, 201, arsip);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createArsip = async (req, res) => {
  try {
    const { no_surat, judul, kategoriId } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const arsip = await arsipService.createArsip({
      no_surat,
      judul,
      fileUrl,
      kategoriId: parseInt(kategoriId),
    });
    responseData(res, 201, arsip);
  } catch (error) {
    responseMessage(res, 400, "Invalid arsip data");
  }
};

exports.getFile = (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "../../uploads", fileName);
  res.sendFile(filePath);
};

exports.deleteArsip = async (req, res) => {
    try {
      const { id } = req.params;
      await arsipService.deleteArsip(id);
      responseMessage(res, 200, "Arsip deleted successfully");
    } catch (error) {
      if (error.message === 'Arsip not found') {
        responseMessage(res, 404, "Arsip not found");
      } else {
        responseMessage(res, 500, "Error deleting arsip");
      }
    }
  };

  exports.getArsipById = async (req, res) => {
    try {
      const { id } = req.params;
      const arsip = await arsipService.getArsipById(id);
      if (!arsip) {
        return responseMessage(res, 404, "Arsip not found");
      }
      responseData(res, 200, arsip);
    } catch (error) {
      responseMessage(res, 500, "Internal server error");
    }
  };
  

exports.editArsip = async (req, res) => {
  try {
    const { id } = req.params;
    const { no_surat, judul, kategoriId } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // Ambil data arsip yang lama untuk mendapatkan fileUrl
    const arsipLama = await arsipService.getArsipById(id);
    if (!arsipLama) {
      return responseMessage(res, 404, "Arsip not found");
    }

    // Hapus file lama jika ada file baru yang diunggah
    if (fileUrl && arsipLama.fileUrl) {
      const oldFilePath = path.join(__dirname, "../../", arsipLama.fileUrl);
      fs.unlink(oldFilePath, (err) => {
        if (err) {
          console.error('Error deleting old file:', err);
        }
      });
    }

    // Update arsip dengan data baru
    const updatedArsip = await arsipService.editArsip(id, {
      no_surat,
      judul,
      fileUrl,
      kategoriId: parseInt(kategoriId),
    });

    if (!updatedArsip) {
      return responseMessage(res, 404, "Arsip not found");
    }

    responseData(res, 200, updatedArsip);
  } catch (error) {
    responseMessage(res, 400, "Invalid arsip data");
  }
};
