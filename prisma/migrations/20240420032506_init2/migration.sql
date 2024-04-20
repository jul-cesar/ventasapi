/*
  Warnings:

  - You are about to drop the column `ventasId` on the `producto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `producto` DROP FOREIGN KEY `Producto_ventasId_fkey`;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `ventasId`;

-- CreateTable
CREATE TABLE `_ProductoToVentas` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ProductoToVentas_AB_unique`(`A`, `B`),
    INDEX `_ProductoToVentas_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductoToVentas` ADD CONSTRAINT `_ProductoToVentas_A_fkey` FOREIGN KEY (`A`) REFERENCES `Producto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductoToVentas` ADD CONSTRAINT `_ProductoToVentas_B_fkey` FOREIGN KEY (`B`) REFERENCES `Ventas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
