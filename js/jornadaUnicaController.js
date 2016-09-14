var app = "";

var markers = [];
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
        });

        $('#map').vectorMap({
            map: 'co_mill',
            zoomMax: 5,
            markerStyle: {
                initial: {
                    fill: '#FFFF00',
                    stroke: 'grey',
                    "fill-opacity": 1,
                    "stroke-width": 1,
                    "stroke-opacity": 1,
                    r: 4,
                    image: 'img/map-marker.png'
                }
            },
            markers: markers,
            backgroundColor: '#F1EBE6',
            onMarkerClick: function(event, index) {
                var content = "";

                content = "<table align='center' border='1'>";
                content += "<tr>" + markers[index].etc + "</tr>";

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
