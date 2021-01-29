-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.2.8-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para cups
CREATE DATABASE IF NOT EXISTS `cups` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cups`;

-- Volcando estructura para tabla cups.capacities
CREATE TABLE IF NOT EXISTS `capacities` (
  `capacityID` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`capacityID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.colors
CREATE TABLE IF NOT EXISTS `colors` (
  `colorID` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`colorID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.expenses
CREATE TABLE IF NOT EXISTS `expenses` (
  `expenseID` int(11) NOT NULL AUTO_INCREMENT,
  `modelID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `userID` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`expenseID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.incomes
CREATE TABLE IF NOT EXISTS `incomes` (
  `incomeID` int(11) NOT NULL AUTO_INCREMENT,
  `modelID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `userID` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`incomeID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.materials
CREATE TABLE IF NOT EXISTS `materials` (
  `materialID` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`materialID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.models
CREATE TABLE IF NOT EXISTS `models` (
  `modelID` int(11) NOT NULL AUTO_INCREMENT,
  `typeID` int(11) DEFAULT NULL,
  `colorID` int(11) DEFAULT NULL,
  `sizeID` int(11) DEFAULT NULL,
  `materialID` int(11) DEFAULT NULL,
  `capacityID` int(11) DEFAULT NULL,
  `userID` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`modelID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.offers
CREATE TABLE IF NOT EXISTS `offers` (
  `offerID` int(11) NOT NULL AUTO_INCREMENT,
  `modelID` int(11) DEFAULT NULL,
  `minimum` int(11) DEFAULT NULL,
  `free` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`offerID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.sizes
CREATE TABLE IF NOT EXISTS `sizes` (
  `sizeID` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sizeID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para procedimiento cups.spstock
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `spstock`(
	IN `n_modelID` Integer,
	IN `n_quantity` Integer,
	IN `option` Integer










)
BEGIN
	DECLARE STOCK INTEGER;
	set STOCK = 0;
	select  quantity into stock from stocks where modelID = n_modelID;
	
	if option = '1'
	THEN
	
	if STOCK <> '0'
		THEN
			set STOCK = STOCK + n_quantity;
			update stocks set quantity =  STOCK where modelID = n_modelID;
		END IF;
		
		if STOCK = '0'
		THEN
			set STOCK = n_quantity;
			INSERT INTO `stocks` ( 
			`modelID`, 
			`quantity`, 
			`createdAt`, 
			`updatedAt`) 
			VALUES (n_modelID, n_quantity, now(),now());
		end if;
		
	end if;
	
	if option = '2'
	THEN
		set STOCK = STOCK - n_quantity;
		update stocks set quantity =  STOCK where modelID = n_modelID;
	
	end if;
	
	select STOCK;
END//
DELIMITER ;

-- Volcando estructura para tabla cups.stocks
CREATE TABLE IF NOT EXISTS `stocks` (
  `stockID` int(11) NOT NULL AUTO_INCREMENT,
  `modelID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`stockID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.types
CREATE TABLE IF NOT EXISTS `types` (
  `typeID` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`typeID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla cups.users
CREATE TABLE IF NOT EXISTS `users` (
  `userID` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para vista cups.vexpense
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `vexpense` (
	`expenseID` INT(11) NOT NULL,
	`quantity` INT(11) NULL,
	`modelID` INT(11) NOT NULL,
	`type` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`color` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`size` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`material` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`capacity` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Volcando estructura para vista cups.vincomes
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `vincomes` (
	`incomeID` INT(11) NOT NULL,
	`quantity` INT(11) NULL,
	`modelID` INT(11) NOT NULL,
	`type` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`color` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`size` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`material` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`capacity` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Volcando estructura para vista cups.vmodels
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `vmodels` (
	`modelID` INT(11) NOT NULL,
	`type` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`color` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`size` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`material` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`capacity` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Volcando estructura para vista cups.vstock
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `vstock` (
	`stockID` INT(11) NOT NULL,
	`quantity` INT(11) NULL,
	`modelID` INT(11) NOT NULL,
	`type` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`color` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`size` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`material` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci',
	`capacity` VARCHAR(255) NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Volcando estructura para vista cups.vexpense
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `vexpense`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `vexpense` AS select 
expense.expenseID, expense.quantity, vmodel.*
from
expenses expense,
vmodels vmodel
where
expense.modelID = vmodel.modelID ;

-- Volcando estructura para vista cups.vincomes
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `vincomes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `vincomes` AS select 
income.incomeID, income.quantity, vmodel.*
from
incomes income,
vmodels vmodel
where
income.modelID = vmodel.modelID ;

-- Volcando estructura para vista cups.vmodels
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `vmodels`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `vmodels` AS select 
model.modelID, 
type.description as type, 
color.description as color, 
size.description as size, 
material.description as material, 
capacity.description as capacity
from 
models model, types type, colors color, sizes size, materials material, capacities capacity
where 
model.typeID = type.typeID and
model.colorID = color.colorID and
model.sizeID = size.sizeID and
model.materialID = material.materialID and
model.capacityID = capacity.capacityID ;

-- Volcando estructura para vista cups.vstock
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `vstock`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `vstock` AS select 
stock.stockID, stock.quantity,  vmodel.*
from
stocks stock,
vmodels vmodel
where
stock.modelID = vmodel.modelID ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
