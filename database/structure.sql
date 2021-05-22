-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para anchorena_database
CREATE DATABASE IF NOT EXISTS `anchorena_database` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `anchorena_database`;

-- Volcando estructura para tabla anchorena_database.contactos
CREATE TABLE IF NOT EXISTS `contactos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `comentario` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla anchorena_database.tipopropiedad
CREATE TABLE IF NOT EXISTS `tipopropiedad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla anchorena_database.propiedad
CREATE TABLE IF NOT EXISTS `propiedad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `tipoopercion` varchar(45) NOT NULL,
  `tipopropiedad_id` int(11) NOT NULL,
  `precio` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `barrio` varchar(255) DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `descripciongral` varchar(512) DEFAULT NULL,
  `suptotal` int(11) DEFAULT NULL,
  `supcubierta` int(11) DEFAULT NULL,
  `supdescubierta` int(11) DEFAULT NULL,
  `ambientes` int(11) DEFAULT NULL,
  `dormitorios` int(11) DEFAULT NULL,
  `banios` int(11) DEFAULT NULL,
  `medcocina` varchar(255) DEFAULT NULL,
  `tipococina` varchar(10) DEFAULT NULL,
  `lavadero` varchar(10) DEFAULT NULL,
  `balcon` varchar(10) DEFAULT NULL,
  `baulera` varchar(10) DEFAULT NULL,
  `palier` varchar(10) DEFAULT NULL,
  `recepcion` varchar(255) DEFAULT NULL,
  `calefaccion` varchar(10) DEFAULT NULL,
  `aire` varchar(10) DEFAULT NULL,
  `expensas` int(11) DEFAULT NULL,
  `abl` int(11) DEFAULT NULL,
  `tipopiso` varchar(255) DEFAULT NULL,
  `nropisos` int(11) DEFAULT NULL,
  `dptosxpisos` int(11) DEFAULT NULL,
  `ascensor` int(11) DEFAULT NULL,
  `gimnasio` varchar(10) DEFAULT NULL,
  `lavaderocen` varchar(10) DEFAULT NULL,
  `sum` varchar(10) DEFAULT NULL,
  `solarium` varchar(10) DEFAULT NULL,
  `salonfiestas` varchar(10) DEFAULT NULL,
  `guardabici` varchar(10) DEFAULT NULL,
  `piscina` varchar(10) DEFAULT NULL,
  `quincho` varchar(10) DEFAULT NULL,
  `parrilla` varchar(10) DEFAULT NULL,
  `seguridad` varchar(10) DEFAULT NULL,
  `grupoelec` varchar(10) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `vimeo` varchar(255) DEFAULT NULL,
  `plano` varchar(255) DEFAULT NULL,
  `fotos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foreignkey_tipopropiedad_id` (`tipopropiedad_id`),
  CONSTRAINT `foreignkey_tipopropiedad_id` FOREIGN KEY (`tipopropiedad_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.



-- Volcando estructura para tabla anchorena_database.tipousuario
CREATE TABLE IF NOT EXISTS `tipousuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla anchorena_database.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tipo_usuario` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `telefono` number DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tipo_usuario` (`tipo_usuario`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`tipo_usuario`) REFERENCES `tipousuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;


-- Volcando estructura para tabla anchorena_database.favoritos
CREATE TABLE IF NOT EXISTS `favoritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `propiedad_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `foreignkey_propiedad_id` (`propiedad_id`),
  KEY `foreignkey_usuario_id` (`usuario_id`),
  CONSTRAINT `foreign_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `foreignkey_propiedad_id` FOREIGN KEY (`propiedad_id`) REFERENCES `propiedad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
