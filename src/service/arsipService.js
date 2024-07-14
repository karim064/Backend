const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

exports.getAllArsip = () => {
  return prisma.arsip.findMany({
    include: { kategori: true }
  });
};

exports.createArsip = (data) => {
  return prisma.arsip.create({
    data,
    include: { kategori: true }
  });
};

exports.deleteArsip = async (id) => {
    const arsip = await prisma.arsip.findUnique({
      where: { id: parseInt(id) }
    });
  
    if (!arsip) {
      throw new Error('Arsip not found');
    }
  
    if (arsip.fileUrl) {
      const filePath = path.join(__dirname, '../../uploads', arsip.fileUrl.split('/').pop());
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
  
    return prisma.arsip.delete({
      where: { id: parseInt(id) }
    });
  };
  

  exports.getArsipById = async (id) => {
    return await prisma.arsip.findUnique({
      where: { id: parseInt(id) },
      include: { kategori: true },
    });
  };
  
  exports.editArsip = async (id, data) => {
    return await prisma.arsip.update({
      where: { id: parseInt(id) },
      data,
      include: { kategori: true },
    });
  };
  