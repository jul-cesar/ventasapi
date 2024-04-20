/*
  Warnings:

  - You are about to alter the column `valor` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,3)`.
  - You are about to alter the column `total` on the `ventas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,3)`.

*/
-- AlterTable
ALTER TABLE `producto` MODIFY `valor` DECIMAL(10, 3) NOT NULL;

-- AlterTable
ALTER TABLE `ventas` MODIFY `total` DECIMAL(10, 3) NOT NULL;
