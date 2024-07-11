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