-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: rico_vehicles
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (702,'rijad@gmail.com','Rijad','Ismailovic','$2a$10$RvfFZ4tvrl0u1bJY/wYrCut.rLYNf6slovGqFpnvqVJQUxN.njVXO','uploads/profile_pictures/50d94a97-25e9-403d-8d89-03cac81d08b3_cropped-image.jpg'),(752,'mirza@gmail.com','Mirza','Cesir','$2a$10$xXQjG7H5WAMmOgQAU8wxLOLgCyH/4t4kc8n1cRm0xHHKjDKNWIQLu','uploads/profile_pictures/80427661-a8c9-4cb5-a000-fc3560e97986_cropped-image.jpg'),(802,'jd@gmail.com','Jasmina','Desta','$2a$10$4GeD0kvrwmUaaIUOPKohQeCaaX/2bguFIAhMALDusywagjUMF/E1K','uploads/profile_pictures/d065e8c4-5852-4e6e-b546-716a55927579_cropped-image.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_seq`
--

DROP TABLE IF EXISTS `users_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_seq`
--

LOCK TABLES `users_seq` WRITE;
/*!40000 ALTER TABLE `users_seq` DISABLE KEYS */;
INSERT INTO `users_seq` VALUES (951);
/*!40000 ALTER TABLE `users_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `id` bigint NOT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year_of_manufacture` int NOT NULL,
  `fk_user_id` bigint DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `distance_traveled` int DEFAULT NULL,
  `engine_size` double DEFAULT NULL,
  `fuel_type` varchar(255) DEFAULT NULL,
  `kw` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `description` text,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmgg1i8mo1mctdumr2i2nw2xid` (`fk_user_id`),
  CONSTRAINT `FKmgg1i8mo1mctdumr2i2nw2xid` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (452,'Volkswagen','Golf 5','Golf 5 1.9 TDI 2007 Tour oprema',2007,702,'Sarajevo',275000,1.9,'Dizel',77,9700,'Auto bez ulaganja. Sjedi vozi. Nema lazi nema prevare. Dva kljuca, Cobra alarm, Zimske Gume celicne Kelly 2023, Ljetne Gume Firestone 2024, Tour oprema (tempomat, zadnji senzori, grijanje sjedista), Dvozonska klima, Novi farovi sa LED sijalicama\n\nVeliki servis urađen prije 6000km\nKvacilo sa zamajcem LUK ugrađen prošle sedmice','uploads/thumbnails/70a113de-c72a-4242-8d7e-8c4e9966d4ff_cropped-image.jpg'),(454,'Renault','Megane 2','Renault Megane 1.5 DCI 2006',2006,702,'Sarajevo',220000,1.5,'Dizel',77,5400,'Savrsena harmonija snage i mehkoće. Auto ide ko avion. 5 litara po gradu. Nekada ne registruje karticu isprve ali hoće upaliti ako ga klikneš još koji put.\n\nRedovno servisirano i voženo sa ljubavlju.','uploads/thumbnails/87d5be10-74e2-47af-ab73-8b0a8289484b_cropped-image.jpg'),(502,'Volkswagen','Golf 7 1.6 TDI 2018','Golf 7 1.6 TDI 2018',2018,752,'Sarajevo',160000,1.6,'Dizel',77,21500,'Auto bez ulaganja. Jedine mane su da ima par parnica i fali mu dugme za sva četiri. Sve ostalo u tip top stanju. 062 498 298','uploads/thumbnails/eb9ef7e2-c584-435c-91b5-a8475a725fb3_cropped-image.jpg');
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles_seq`
--

DROP TABLE IF EXISTS `vehicles_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles_seq`
--

LOCK TABLES `vehicles_seq` WRITE;
/*!40000 ALTER TABLE `vehicles_seq` DISABLE KEYS */;
INSERT INTO `vehicles_seq` VALUES (601);
/*!40000 ALTER TABLE `vehicles_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-25 17:40:06
