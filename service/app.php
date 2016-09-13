<?php
require_once 'Reader.php';
require_once 'BaseJornadaUnica.php';
require_once 'BaseJornadaUnicaMerge.php';

$fileName = "Base-jornada-unica.json";
$reader = new Reader();
$baseJornadaUnica = new BaseJornadaUnica();
$baseJornadaUnicaMerge = new BaseJornadaUnicaMerge();

$reader->read("Resources/", "Base-jornada-unica.xlsx");
$baseJornadaUnica->setReader($reader);
$baseJornadaUnicaMerge->setReader($reader);
$baseJornadaUnicaMerge->setBaseMide($baseJornadaUnica);

$dataArray = array();

$dataArray = $baseJornadaUnicaMerge->getArrayAllEntitiesToBuildJson();

$file = fopen('Resources/'.$fileName.'', "w") or die("Problemas para generar el archivo Json - ( Resources/".$fileName." )");
fwrite($file, json_encode($dataArray,JSON_PRETTY_PRINT));
echo "El archivo ($fileName) se genero correctamente";