<?php

class BaseJornadaUnicaMerge {
    
    /**
     * @type Reader
     * @type Level
     * @type Word 
     */
    
    protected $reader;
    protected $baseJornadaUnica;
    
    
    public function setReader($reader) {
        $this->reader = $reader;
    }
    
    public function setBaseMide($baseJornadaUnica) {
        $this->baseJornadaUnica = $baseJornadaUnica;
    }
    
    public function getArrayAllEntitiesToBuildJson() {
        $entitiesArray = $this->baseJornadaUnica->getArrayAllEntities();
        $dataArray = array();

        foreach ($entitiesArray as $i => $entities) {
            $dataArray[$i]['departamento'] = $entities['departamento'];
            $dataArray[$i]['etc'] = $entities['etc'];
            $dataArray[$i]['establecimientosEducativos'] = $entities['establecimientosEducativos'];
            $dataArray[$i]['sedesEducativas'] = $entities['sedesEducativas'];
            $dataArray[$i]['cupos'] = $entities['cupos'];
            $dataArray[$i]['matriculas'] = $entities['matriculas'];
            $dataArray[$i]['recursosPAE'] = $entities['recursosPAE'];
            $dataArray[$i]['totalMatricula'] = $entities['totalMatricula'];
            $dataArray[$i]['materialEntregado'] = $entities['materialEntregado'];
            $dataArray[$i]['coordenadaX'] = $entities['coordenadaX'];
            $dataArray[$i]['coordenadaY'] = $entities['coordenadaY'];
        }
        
        return $dataArray;
    }
    
}
