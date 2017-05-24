var app = "";

var markers = [];
var counter=0;
var app = angular.module("jornadaUnicaApp", []);

app.controller('jornadaUnicaController', function($scope, $http) {
    $scope.entities = [];
    var obj = {content: null};
    $http.get('service/Resources/Base-jornada-unica.json').success(function(data) {
        obj.content = data;
        angular.forEach(obj.content, function(entities) {
            markers.push({
                "latLng": [parseFloat(entities.coordenadaX), parseFloat(entities.coordenadaY)],
                "name": entities.etc,
                "departamento": entities.departamento,
                "etc": entities.etc,
                "establecimientosEducativos": entities.establecimientosEducativos,
                "sedesEducativas": entities.sedesEducativas,
                "cupos": entities.cupos,
                "matriculas": entities.matriculas,
                "recursosPAE": entities.recursosPAE,
                "totalMatricula": entities.totalMatricula,
                "materialEntregado": entities.materialEntregado
            });
            counter++;
            console.log("x: "markers[counter].coordenadaX+"y:"+markers[counter].coordenadaY);
        });


        $('#map').vectorMap({
            map: 'co_mill',
            zoomMax: 5,
            markerStyle: {
                initial: {
                    fill: '#FFFFFF',
                    stroke: 'grey',
                    "fill-opacity": 1,
                    "stroke-width": 1,
                    "stroke-opacity": 1,
                    r: 5,
                    //image: 'img/map-marker.png'
                }
            },
            markers: markers,
            backgroundColor: '#F1EBE6',

            series: {
                regions: [{
                    values: {
                        "CO-SAP": '#3A66A3',
                        "CO-LAG": '#4B77B2',
                        "CO-MAG": '#1C477A',
                        "CO-ATL": '#2A5593',
                        "CO-CES": '#3A66A3',
                        "CO-BOL": '#4B77B2',
                        "CO-SUC": '#3A66A3',
                        "CO-COR": '#1C477A',
                        "CO-ANT": '#5783BA',
                        "CO-SAN": '#2A5593',
                        "CO-NSA": '#5783BA',
                        "CO-CHO": '#4B77B2',
                        "CO-ARA": '#1C477A',
                        "CO-VID": '#5783BA',
                        "CO-GUV": '#2A5593',
                        "CO-CAS": '#3A66A3',
                        "CO-MET": '#1C477A',
                        "CO-VAU": '#3A66A3',
                        "CO-AMA": '#1C477A',
                        "CO-CAL": '#3A66A3',
                        "CO-TOL": '#4B77B2',
                        "CO-BOY": '#4B77B2',
                        "CO-VAC": '#3A66A3',
                        "CO-DC": '#2A5593',
                        "CO-PUT": '#4B77B2',
                        "CO-GUA": '#2A5593',
                        "CO-HUI": '#3A66A3',
                        "CO-NAR": '#2A5593',

                        "CO-RIS": '#3A66A3',
                        "CO-CUN": '#3A66A3',
                        "CO-CAU": '#3A66A3',
                        "CO-CAQ": '#3A66A3',
                        "CO-QUI": '#3A66A3',

                    },
                 }],
             },

            onMarkerClick: function(event, index) {
                var content = "";

                content = "<p class='title-modal'><span></span>" + markers[index].etc + "</p>";

                content += "<table class='table-responsive' align='center' border='1'>";

                content += "<tr>";
                content += "<td>Establecimientos Educativos en Jornada \u00danica  (Fase 1-4)</td>";
                content += "<td>" + markers[index].establecimientosEducativos + "</td>";
                content += "<td>Sedes Educativas en Jornada \u00danica  (Fase 1-4)</td>";
                content += "<td>" + markers[index].sedesEducativas + "</td>";
                content += "</tr>";

                content += "<tr>";
                content += "<td>Cupos en Jornada \u00danica  (Fase 1-4)</td>";
                content += "<td>" + markers[index].cupos + "</td>";
                content += "<td>% Jornada \u00danica/Total Matrícula ETC</td>";
                content += "<td>" + markers[index].matriculas + "</td>";
                content += "</tr>";

                content += "<tr>";
                content += "<td>Recursos PAE JU</td>";
                content += "<td>" + markers[index].recursosPAE + "</td>";
                content += "<td>Material Singapur entregado</td>";
                content += "<td>" + markers[index].materialEntregado + "</td>";
                content += "</tr>";

                content += "</table>";

                $('#myModal').modal('show').find('.modal-body').html(content);
            },
        });

    });
});
