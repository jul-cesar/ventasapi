/*
  Warnings:

  - Added the required column `ImgURL` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `producto` ADD COLUMN `ImgURL` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ventas` ADD COLUMN `total` DECIMAL(65, 30) NOT NULL;
