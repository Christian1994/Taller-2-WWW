-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-11-2015 a las 05:49:39
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `calculadora`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados_calc`
--

CREATE TABLE IF NOT EXISTS `resultados_calc` (
  `valor_a` float NOT NULL,
  `valor_b` float NOT NULL,
  `operacion` varchar(1) NOT NULL,
  `resultado` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `resultados_calc`
--

INSERT INTO `resultados_calc` (`valor_a`, `valor_b`, `operacion`, `resultado`) VALUES
(453.09, 1295, '+', 1748.09),
(6.98, 36.45, '+', 43.43),
(250, 500, '/', 0.5),
(9.6, 36.4, '+', 46),
(2380, 380, '-', 2000),
(152.85, 58.06, '*', 8874.47),
(3.14152, 2, '*', 6.28304),
(85.26, 345, '*', 29414.7),
(0.417346, 25.65, '+', 26.0673),
(25.72, 32.55, '-', -6.83);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
