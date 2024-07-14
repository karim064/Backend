-- DropForeignKey
ALTER TABLE `arsip` DROP FOREIGN KEY `Arsip_kategoriId_fkey`;

-- AddForeignKey
ALTER TABLE `arsip` ADD CONSTRAINT `Arsip_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `kategori`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
