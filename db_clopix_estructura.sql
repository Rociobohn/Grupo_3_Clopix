-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clopix_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema clopix_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clopix_db` DEFAULT CHARACTER SET utf8 ;
USE `clopix_db` ;

-- -----------------------------------------------------
-- Table `clopix_db`.`talles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clopix_db`.`talles` (
  `size_id` INT(11) NOT NULL,
  `name_size` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`size_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clopix_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clopix_db`.`products` (
  `id` INT(11) NOT NULL,
  `nameProduct` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `priceUnit` DOUBLE NULL DEFAULT NULL,
  `talle_id` INT(11) NOT NULL,
  PRIMARY KEY (`talle_id`),
  CONSTRAINT `talle_id`
    FOREIGN KEY (`talle_id`)
    REFERENCES `clopix_db`.`talles` (`size_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clopix_db`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clopix_db`.`rol` (
  `rol_id` INT(11) NOT NULL,
  `name_rol` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`rol_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clopix_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clopix_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(32) NOT NULL,
  `phone` VARCHAR(12) NULL DEFAULT NULL,
  `full_name` VARCHAR(120) NULL DEFAULT NULL,
  `avatar_image` VARCHAR(200) NULL DEFAULT NULL,
  `rol_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `testeando_idx` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `rol_id`
    FOREIGN KEY (`rol_id`)
    REFERENCES `clopix_db`.`rol` (`rol_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
