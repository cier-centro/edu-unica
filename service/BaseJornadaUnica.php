<?php

require_once 'Reader.php';

class BaseJornadaUnica {

    protected $reader;

    public function setReader($reader) {
        $this->reader = $reader;
    }

    public function getArrayAllUniversitiesByCodeIes($codeIes) {
        $sheet = $this->reader->getSheetObject();
        $entitiesArray = array();

        for ($file = 2; $file <= $sheet->getHighestRow(); $file++) {
            $cellCodeIesValue = $sheet->getCellByColumnAndRow(1, $file)->getValue();

            if ($codeIes == $cellCodeIesValue) {
                $entitiesArray[] = $sheet->getCellByColumnAndRow(0, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(1, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(2, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(3, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(4, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(5, $file)->getValue();
            }
        }

        return $entitiesArray;
    }

    public function getArrayAllEntities() {
        $sheet = $this->reader->getSheetObject();
        $entitiesArray = array();

        $i = 0;

        for ($file = 2; $file <= $sheet->getHighestRow(); $file++) {

            $departamento = $sheet->getCellByColumnAndRow(0, $file)->getValue();
            $etc = $sheet->getCellByColumnAndRow(1, $file)->getValue();
            $establecimientosEducativos = $sheet->getCellByColumnAndRow(2, $file)->getValue();
            $sedesEducativas = $sheet->getCellByColumnAndRow(3, $file)->getValue();
            $cupos = str_replace(',','.',number_format($sheet->getCellByColumnAndRow(4, $file)->getValue()));
            $matriculas = number_format(($sheet->getCellByColumnAndRow(5, $file)->getValue() * 100), 1,',','');
            $recursosPAE = str_replace(',','.',number_format($sheet->getCellByColumnAndRow(6, $file)->getValue()));
            $totalMatricula = str_replace(',','.',number_format($sheet->getCellByColumnAndRow(7, $file)->getValue()));
            $materialEntregado = str_replace(',','.',number_format($sheet->getCellByColumnAndRow(8, $file)->getValue()));
            $coordenadaX = str_replace(',','.',number_format($sheet->getCellByColumnAndRow(9, $file)->getValue()));
            $coordenadaY = str_replace(',','.',number_format($sheet->getCellByColumnAndRow(10, $file)->getValue()));

            $entitiesArray[$i]['departamento'] = $departamento;
            $entitiesArray[$i]['etc'] = $etc;
            $entitiesArray[$i]['establecimientosEducativos'] = $establecimientosEducativos;
            $entitiesArray[$i]['sedesEducativas'] = $sedesEducativas;
            $entitiesArray[$i]['cupos'] = $cupos;
            $entitiesArray[$i]['matriculas'] = $matriculas;
            $entitiesArray[$i]['recursosPAE'] = $recursosPAE;
            $entitiesArray[$i]['totalMatricula'] = $totalMatricula;
            $entitiesArray[$i]['materialEntregado'] = $materialEntregado;
            $entitiesArray[$i]['coordenadaX'] = $coordenadaX;
            $entitiesArray[$i]['coordenadaY'] = $coordenadaY;

            $i++;
        }

        return $entitiesArray;
    }

}
