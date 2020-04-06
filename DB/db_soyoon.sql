-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 06, 2020 at 12:15 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

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
  `textEtc` text NOT NULL,
  `image` text NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `name`, `tool`, `team`, `text`, `textEtc`, `image`, `link`) VALUES
(1, 'float:LEFT', 'HTML & SASS', 'Daffodil Ho\r\nSujin Lee\r\nJeffrey Helder\r\nSoyoon Lee', 'This project is designed and developed a responsive HTML5 and CSS3 website for our start-up imaginary agency.\r\n\r\nFloat: LEFT is one of the CSS properties. \r\nThis is a metaphorical expression that our team satisfied clients like flying the sky.\r\n\r\n\r\n', 'I participated as Front-End developer, wrote semantical static HTML and CSS(SASS).', 'float-mockup.png\r\n', 'https://github.com/soyoooooon/BootCamp'),
(2, 'Music Mixer', 'HTML & CSS & Java Script', 'Daffodil Ho\r\nSoyoon Lee\r\n', 'This project was the first time that I participated as a Front-End developer in the school.\r\nMy teammate designed the multimedia application using design and motion tools. I built CSS, HTML, JavaScript. \r\n', 'This is an HTML Page containing the drag and drops functionality to load audio and create a dynamic audio experience.\r\n\r\nI participated as Front-End developer, wrote semantical static HTML, CSS, Java script.', 'music-mockup.png', 'https://github.com/daffodilho/Lee_Ho_MusicMixer.git'),
(3, 'Snow Family', 'Liquid & SASS', 'My own project', 'I participated in one of the school projects Northern and Fanshawe Shopify projects, which is that Students be taught about eCommerce and Shopify development.\r\n\r\nThrough this course,I\'ve got learned about Shopify e-commerce platform, also basic Liquid, command lines and how Shopify works.\r\n', 'Snow Family is the imaginary online store that I\'ve practiced Liquid with.\r\n\r\n<a href=\"https://www.northern.co/fanshawe-shopify target=\"_blank\">', 'shopify.png', 'https://4a3y7pyyioj65n8g-31233605770.shopifypreview.com'),
(4, 'Roku Flashback', 'HTML & SASS & Vue.JS & PHP', 'Daffodil Ho\r\nSoyoon Lee', 'This project is designed and built a vintage video/audio app by Vue.js framework. Our team concept was retro-style videos and audios app. we got prepared 1950s,1960s,1970s, etc music and movies.\r\n\r\n', 'I participated as Front-End developer.', 'roku-vue.png', 'https://github.com/soyoooooon/Ho_Lee_Roku'),
(5, 'Red Ribbon Youth', 'HTML & SASS & Vue.js', 'Soyoon Lee\r\nJeffrey Helder\r\nDaffodil Ho\r\nSujin Lee\r\nMegan Nguyen', 'This object of the project was advertising a campaign of regional HIV/Aids connection. \r\nDesigned and Developed online solutions including social media that reflect an organization\'s goals, objection, and identity.', 'Our campaign \'Red Ribbon Youth\' was to combat HIV discrimination of raising awareness and understanding among teenagers.\r\n\r\nI participated as Front-End developer, wrote semantic HTML, CSS(SASS) and Vue.JS.', 'rry.png', 'https://github.com/soyoooooon/Helder_Ho_Lee_Lee_Nguyen_FIP'),
(6, 'Chat App with Socket.io', 'HTML & SASS & Node.JS & Vue.JS', 'My own project\r\n', 'This project was built a chat application by using Node.JS,Vue.Js with Socket.io\r\n', 'The first experience of socket.io. I\'ve realized that need to study more about third parties of Node.js.', 'yoonchat.png', 'https://github.com/soyoooooon/Lee_Soyoon_ChatApp.git'),
(7, 'The Banana Slicer!', 'HTML & SASS & Java Script & Node.JS', 'My own project', 'This project was developing an application the favorite product by Node.JS, HTML, SASS and connecting with Heroku.\r\n\r\n\r\n', 'This work was the first project that I learned about more back-end development. I built this site with Node.JS and hosted it with Heroku.\r\nthat being said, this web site was my first hosting web site\r\n\r\n<a href=\"https://leesoyoon-heroku-test.herokuapp.com/\" target=\"_blank\">', 'banana-mockup.png', 'https://github.com/soyoooooon/Lee_Soyoon_HeroukuTest.git'),
(8, 'Ontario Summer Tourism (Hackathon Project)', 'HTML & SASS & Vue.JS', 'Nour al-Osman\r\nSoyoon Lee\r\nJeffrey Helder\r\nSujin Lee\r\nDaffodil Ho\r\n', 'Researched and gathered information to put together a one-page responsive webpage promoting tourism in Ontario during Summer. Designed and developed using Adobe Creative Suite and HTML, CSS(SASS), and JavaScript. \r\n', 'Page contains PHP and mySQL functionalities and utilizes Vue.JS as the front-end framework.\r\n\r\n', 'ontarioSummer.png', 'https://github.com/soyoooooon/AlOsman_Helder_Ho_Lee_Lee_Hackathon'),
(9, 'Thames River Anglers Association', 'HTML & CSS & Java Script', 'Soyoon Lee\r\nYufeng Lin \r\nJoe Guzman \r\n', 'This project was rebuilding TRAA(Thames River Anglers Association) original site with our new designs and semantic codes. Also making them responsive with using a media query. \r\n', 'This project was done by when I was the first year in college. So it seems naive and amateur. \r\nI hesitated to put on my website, but so much learned from building this project.', 'traa.png', 'https://github.com/soyoooooon/Lee_S-Lin-Guzman-Final'),
(10, 'Dynamic Team Page', 'HTML & CSS & Java Script', 'Soyoon Lee\r\nYufeng Lin', 'Making a team page with a partner. Designing a website, Writing HTML,CSS and Java Script.\r\nThis project was the first time that I\'ve used Java Script, when I was the first-year student. ', 'This project reminds me of how much \r\nI had a hard time to learn basic JavaScript. \r\nIt also comes to motivate me so far.', 'teampage.png', 'https://github.com/soyoooooon/Lee_S-Lin_teampage');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
