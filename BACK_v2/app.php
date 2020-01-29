<?php

use \Firebase\JWT\JWT;

require_once "bootstrap.php";
require './src/TabUser.php';
require './src/TabProduct.php';
require './src/TabProductDetails.php';

// display errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type');


error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
error_reporting(E_ALL);

$config = [
    'settings' => [
        'displayErrorDetails' => true
    ]
];


const JWT_SECRET = "CAT674210";

// set JWT token
$jwt = new \Slim\Middleware\JwtAuthentication([
    "path" => "/auth",
    "secure" => false,
    "passthrough" => ["/api/signIn", "/api/signUp", "/api/products", "/api/products/details/{id}"],
    "secret" => JWT_SECRET,
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function ($response, $args) {
        $data = array('ERREUR' => 'ERREUR');
        return $response->withJson($data);
    }
]);

// instantiate the App object
$app = new \Slim\App($config);

$app->add($jwt);

// USER ROUTES

/**
 * When user sign in 
 */
$app->post('/api/signIn', function ($request, $response, $args) use ($entityManager) {

    $body = $request->getParsedBody();

    $login = $body["login"];
    $password = $body["password"];

    // check in database
    $clientRepository = $entityManager->getRepository('TabUser');
    $user = $clientRepository->findOneBy(array('login' => $login, 'pwd' => $password));

    // user exists
    if ($user != null) {
        $issuedAt = time();
        $expirationTime = $issuedAt + 60000; // jwt valid for 10000 seconds from the issued time

        $payload = array(
            'login' => $user->getId(),
            'iat' => $issuedAt,
            'exp' => $expirationTime
        );

        $token_jwt = JWT::encode($payload, JWT_SECRET, "HS256");

        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}")->withHeader("Content-Type", "application/json");
        $data = array(
            'login' => $user->intoArray(),
            'AuthorizationType' => "Bearer",
            'Authorization' => $token_jwt
        );
        return $response->withJson($data);
    }
});

/**
 * When user sign up 
 */
$app->post('/api/signUp', function ($request, $response, $args) use ($entityManager) {
    // Parse le body
    $rawdata = file_get_contents("php://input");
    // Let's say we got JSON
    $decoded = json_decode($rawdata);

    $client = new TabUser;
    $client->setGender($decoded->{'civility'});
    $client->setFirstname($decoded->{'firstName'});
    $client->setLastname($decoded->{'lastName'});
    $client->setAddress($decoded->{'address'});
    $client->setZipCode($decoded->{'cp'});
    $client->setCity($decoded->{'city'});
    $client->setCountry($decoded->{'land'});
    $client->setPhoneNumber($decoded->{'phone_formated'});
    $client->setEmailAddress($decoded->{'mail'});
    $client->setLogin($decoded->{'login'});
    $client->setPwd($decoded->{'password'});

    $entityManager->persist($client);
    $entityManager->flush();

    // user exists
    if ($client != null) {
        $issuedAt = time();
        $expirationTime = $issuedAt + 10000; // jwt valid for 10000 seconds from the issued time

        $payload = array(
            'login' => $decoded->{'login'},
            'iat' => $issuedAt,
            'exp' => $expirationTime
        );

        $token_jwt = JWT::encode($payload, JWT_SECRET, "HS256");

        $response = $response->withHeader("Content-Type", "application/json");
        $data = array(
            'login' => $decoded->{'login'},
            'Authorization' => $token_jwt
        );
        return $response->withJson($data);
    }
});

/**
 * Update user (works with Postman but not with Angular : pb with sended token)
 */
$app->put('/auth/updateUser', function ($request, $response, $args) use ($entityManager) {
    // get token 
    $token = $request->getAttribute("decoded_token_data");

    // get user object
    $rawdata = file_get_contents("php://input");
    // parse into JSON
    $decoded = json_decode($rawdata);

    // get user from database
    $clientRepository = $entityManager->getRepository('TabUser');
    $client = $clientRepository->findOneBy(array('login' => $token->login));

    if ($client) {
        $client->setGender($decoded->{'civility'});
        $client->setFirstname($decoded->{'firstName'});
        $client->setLastname($decoded->{'lastName'});
        $client->setAddress($decoded->{'address'});
        $client->setZipCode($decoded->{'cp'});
        $client->setCity($decoded->{'city'});
        $client->setCountry($decoded->{'land'});
        $client->setPhoneNumber($decoded->{'phone_formated'});
        $client->setEmailAddress($decoded->{'mail'});
        $client->setLogin($decoded->{'login'});
        $client->setPwd($decoded->{'password'});

        $entityManager->persist($client);
        $entityManager->flush();
        $response->withJson($client);
    }
});

/**
 * Delete user (works with Postman but not with Angular : pb with sended token)
 */
$app->delete('/auth/deleteUser', function ($request, $response, $args) use ($entityManager) {
    // get token 
    $token = $request->getAttribute("decoded_token_data");
    var_dump($token->login);

    $clientRepository = $entityManager->getRepository('TabUser');
    $user = $clientRepository->findOneBy(array('id' => $token->login));
    if ($user) {

        $entityManager->remove($user);
        $entityManager->flush();
    }
});

/**
 * Get user informations by sending token (works with Postman but not with Angular : pb with sended token)
 */
$app->get('/auth/userInfo', function ($request, $response, $args) use ($entityManager) {
    // get token 
    $token = $request->getAttribute("decoded_token_data");

    $clientRepository = $entityManager->getRepository('TabUser');

    $user = $clientRepository->findOneBy(array('id' => $token->login));

    var_dump($user);
    if ($user) {
        $data = array(
            'login' => $user->intoArray(),
        );
        return $response->withJson($data);
        //return $response->withJson($user->intoArray());
    }

    return $response->withStatus(413);
});


// PRODUCT

// get all products
$app->get('/api/products', function ($request, $response, $args) use ($entityManager) {
    $clientRepository = $entityManager->getRepository('TabProduct');
    $products = $clientRepository->findAll();

    // parse products into JSON
    $parsed = [];

    foreach ($products as $p) {
        array_push($parsed, $p->intoArray());
    }

    return $response->withJson($parsed);
});

// insert product 
/*$app->post('/api/createProduct', function () use ($entityManager) {
    $client = new TabProduct;
    $client->setName('Bracelet');
    $client->setPrice('230');
    $client->setMaterial(new TabMaterial->set);
    $entityManager->persist($client);
    $entityManager->flush();

    echo "Created User with ID " . $client->getId() . "\n";
});*/

// get product by id
$app->get('/products/details/{id}', function ($request, $response, $args) use ($entityManager) {
    $id = $args['id'];
    $clientRepository = $entityManager->getRepository('TabProductDetails');

    $product = $clientRepository->findOneBy(array('id' => $id));
    return $response->withJson($product->intoArray());
});

/**
 * Get current token (never used)
 */
$app->get('/auth/getToken', function ($request, $response, $args) {
    $token = $request->getAttribute("decoded_token_data");

    return $response->withHeader("Content-Type", "application/json")->withJson($token);
});

// Run application
$app->run();

// Génération du fichier de mapping
// vendor/bin/doctrine orm:convert-mapping --namespace="" --force --from-database yml config/yaml

// Génération des classes entites
// vendor/bin/doctrine orm:generate-entities --generate-annotations=false --update-entities=true --generate-methods=false src
