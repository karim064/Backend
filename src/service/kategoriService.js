const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllKategori = () => {
  return prisma.kategori.findMany({
 });
};

exports.createKategori = (data) => {
  return prisma.kategori.create({
    data
  });
};

exports.deleteKategori = (id) => {
    return prisma.kategori.delete({
      where: {
        id: parseInt(id)  // Menggunakan parseInt karena biasanya id berupa string dari parameter URL
      }
    });
  };

  exports.updateKategori = (id, data) => {
    return prisma.kategori.update({
      where: {
        id: parseInt(id)
      },
      data
    });
  };

  exports.getKategoriById = (id) => {
    return prisma.kategori.findUnique({
      where: {
        id: parseInt(id)
      }
    });
  };