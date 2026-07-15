/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Project_name_key` ON `Project`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Task_title_key` ON `Task`(`title`);
