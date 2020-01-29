<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;


date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";

// Create a simple "default" Doctrine ORM configuration for Annotations
$isDevMode = true;

$config = Setup::createYAMLMetadataConfiguration(array(__DIR__."\config\yaml"), $isDevMode);

// database configuration parameters
$conn = array(
    'driver'   => 'pdo_mysql',
    'host'     => 'localhost',
    'charset'  => 'utf8',
    'user'     => 'root',
    'password' => '',
    'dbname'   => 'shop',
    'port'     => 3306
);

// obtaining the entity manager
$entityManager = EntityManager::create($conn, $config);
