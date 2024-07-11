const arsipService = require("../service/arsipService");
const { responseData, responseMessage } = require("../utils/responHandler");
const path = require('path');

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
