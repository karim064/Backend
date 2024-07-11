const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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