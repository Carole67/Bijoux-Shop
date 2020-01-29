-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 29 jan. 2020 à 23:39
-- Version du serveur :  10.4.8-MariaDB
-- Version de PHP :  7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `shop`
--

-- --------------------------------------------------------

--
-- Structure de la table `tab_product`
--

CREATE TABLE `tab_product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tab_product`
--

INSERT INTO `tab_product` (`id`, `name`, `description`, `price`, `image`) VALUES
(1, 'Collier', 'Collier Torsade Or jaune ', 270, 'https://www.media-rdc.com/medias/461cfc34685f3a73b2c2535dfd505143/p_580x580/collier-torsade-or-jaune-375-00.jpg'),
(2, 'Bracelet', 'Bracelet Men In Black LS1554-2-1 - Bracelet Acier Gourmette Homme MarqueLotus', 100, 'https://www.petitegravure.com/941-large_default/gourmette-homme-en-argent-plaque-925.jpg'),
(3, 'Alliances', 'Alliances diam', 2000, 'https://www.vuillermoz.fr/bijoux-thumb__w400h400zc2q90__/demi-alliance-diamant-serti-griffes-1-00-carat_12665-1.jpg'),
(4, 'Bague', 'Bagues croisées avec diamants', 650, 'https://media.histoiredor.com/fr/view0/B3DFBDW041G.jpg'),
(5, 'Pendentif Moonlight Opale', 'Pendentif en or jaune 750 millièmes avec une opale goutte taillée cabochon de 2 carats sertie 4 griffes.', 990, 'https://www.ordumonde.com/products/8018/large/collier-moonlight-opale.jpg?1481655259'),
(6, 'Gourmette homme', 'Superbe gourmette pour homme design et tendance en acier et caoutchouc noir. Avec un style moderne et simple à la fois, c\'est un cadeau original.', 25, 'https://www.zenseparis.com/1095-thickbox_default/gourmette-homme-acier-inoxydable-caoutchouc-noir-zb0145.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `tab_product_details`
--

CREATE TABLE `tab_product_details` (
  `id` int(11) NOT NULL,
  `reference` varchar(20) NOT NULL,
  `weight` float NOT NULL,
  `material` varchar(30) NOT NULL,
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tab_product_details`
--

INSERT INTO `tab_product_details` (`id`, `reference`, `weight`, `material`, `gender`) VALUES
(1, 'MO5623', 2.5, 'Or jaune', 'Femme'),
(2, 'DF5623', 3, 'Or blanc', 'Homme'),
(3, 'DE458978', 3.6, 'Platine', 'Femme'),
(4, 'AZ2345-U', 2.5, 'Or blanc', 'Femme'),
(5, 'CM234589K', 1.3, 'Or jaune', 'Femme'),
(6, 'GH2356HJ', 4.6, 'Argent', 'Homme');

-- --------------------------------------------------------

--
-- Structure de la table `tab_user`
--

CREATE TABLE `tab_user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `login` varchar(10) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `zip_code` int(5) NOT NULL,
  `city` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `phone_number` int(20) NOT NULL,
  `email_address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tab_user`
--

INSERT INTO `tab_user` (`id`, `firstname`, `lastname`, `gender`, `login`, `pwd`, `address`, `zip_code`, `city`, `country`, `phone_number`, `email_address`) VALUES
(3, 'Dupond', 'Jeannette', 'F', 'JDUPOND', 'JeanDup', '42 rue des Frères', 67120, 'Molsheim', 'France', 0, 'j.dupond@free.com'),
(5, 'Meyer', 'Françoise', 'F', 'FMEYER', 'Dev_Code', '7 rue du Dôme', 67000, 'Strasbourg', 'France', 0, 'fmeyer89@buygues.com'),
(41, 'Muller', 'Bruno', 'M', 'MJEANNE', '123456789', '8a rue des Trucs', 48000, 'Brenoux', 'France', 0, 'juju@orange.fr'),
(42, 'Laure', 'M', 'M', 'LA', 'azerty14', '6a rue des Champi', 67820, 'Strasbourg', 'France', 0, 'sdfg@p.fr'),
(44, 'Guillaume', 'Schmidt', 'M', 'GSCHMIDT', 'Azertyuiop', '45 rue des Fleurs', 68000, 'Colmar', 'France', 0, 'gui.sch@orange.fr');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `tab_product`
--
ALTER TABLE `tab_product`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tab_product_details`
--
ALTER TABLE `tab_product_details`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tab_user`
--
ALTER TABLE `tab_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `tab_product`
--
ALTER TABLE `tab_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `tab_user`
--
ALTER TABLE `tab_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `tab_product_details`
--
ALTER TABLE `tab_product_details`
  ADD CONSTRAINT `fk_id_product` FOREIGN KEY (`id`) REFERENCES `tab_product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
