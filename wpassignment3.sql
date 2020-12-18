-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2020 at 07:39 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wpassignment3`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp03ass_tab`
--

CREATE TABLE `wp03ass_tab` (
  `title` varchar(70) NOT NULL,
  `username` varchar(70) DEFAULT NULL,
  `password` varchar(70) NOT NULL,
  `url` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp03ass_tab`
--

INSERT INTO `wp03ass_tab` (`title`, `username`, `password`, `url`) VALUES
('Instagram', 'huzaifa@gmail.com', '$2y$10$TjFE2ap0HoDTcjLsL9VMLOD7bUPu5B/lkPkIsiiLcLLBZWY7dd6z2', 'www.instagram.com'),
('Wp assignment', 'huzaifa@gmail.com', '$2y$10$dUO6Jo9KKMgWbrluMGi8zuAsSsNmgv2wnLTfKiXlF2R7lvR5x8Eda', 'www.facebook.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp03ass_tab`
--
ALTER TABLE `wp03ass_tab`
  ADD PRIMARY KEY (`title`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
