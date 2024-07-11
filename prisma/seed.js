// seed.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Seed kategori
    await prisma.kategori.createMany({
      data: [
        {
          nama: 'Kategori 1',
          keterangan: 'Keterangan kategori 1',
        },
        {
          nama: 'Kategori 2',
          keterangan: 'Keterangan kategori 2',
        },
      ],
    });

    // Seed arsip
    await prisma.arsip.createMany({
      data: [
        {
          no_surat: '001/2024',
          judul: 'Arsip 1',
          fileUrl: 'https://example.com/file1.pdf',
          kategoriId: 1,
        },
        {
          no_surat: '002/2024',
          judul: 'Arsip 2',
          fileUrl: 'https://example.com/file2.pdf',
          kategoriId: 2,
        },
      ],
    });

    console.log('Seed data berhasil ditambahkan!');
  } catch (error) {
    console.error('Gagal menambahkan seed data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
