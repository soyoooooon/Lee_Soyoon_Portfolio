-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 08, 2019 at 08:47 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_soyoon`
--

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `tool` text NOT NULL,
  `team` text NOT NULL,
  `text` text NOT NULL,
  `image` text NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `name`, `tool`, `team`, `text`, `image`, `link`) VALUES
(1, 'Music Mixer', 'HTML & CSS & Java Script', 'Design - Daffodil Ho', 'Let’s have fun with music cans!', 'music-mockup.png', 'https://github.com/daffodilho/Lee_Ho_MusicMixer'),
(2, 'float:LEFT', 'HTML & SASS ', 'Design - Daffodil Ho, Sujin Lee \r\nJavascript - Jeffrey Helder', 'Here’s a powerful web studio \"float:LEFT\" in Fanshawe', 'float-mockup.png', 'https://github.com/soyoooooon/BootCamp'),
(3, 'TEAM PAGE', 'HTML & CSS & Java Script', 'Design - Yufeng Lin', ' This is how being a team', 'team-mockup.png', 'https://github.com/soyoooooon/Lee_S-Lin_teampage'),
(4, 'Banana Slicer', 'HTML & SASS & Node.js', 'Design - myself', 'Just look at this amazin Banna Slicer :p', 'banana-mockup.png', 'https://github.com/soyoooooon/Lee_Soyoon_HeroukuTest');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bio`
--

CREATE TABLE `tbl_bio` (
  `id` int(11) NOT NULL,
  `job` text NOT NULL,
  `feature` text NOT NULL,
  `extra` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_bio`
--

INSERT INTO `tbl_bio` (`id`, `job`, `feature`, `extra`) VALUES
(1, 'A Front-end developer, Designer based in London, Ontario.\r\n\r\n', 'Love cuddling with computers than humans ;) \r\n\r\nshy but down to the earth.\r\n', 'Trilingual: Korean, English, Computer Language.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_bio`
--
ALTER TABLE `tbl_bio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_bio`
--
ALTER TABLE `tbl_bio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
