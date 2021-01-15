$(document).ready(function() {

    $('#hoy').click(function() {
        var ubicacion = $('#lugar').val();
        alert(ubicacion);

        if (ubicacion != '') {

            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + ubicacion + "&appid=eb4bd6b2982548b42b156c5b816ff5f9",
                type: "POST",
                dataType: "json",
                success: function(data) {

                	alert(data.main);                    
                    var infoTiempo = mostrarInfo(data);

                    $('#tiempo').html(infoTiempo);
                }
            });

        } else {
            $('#error').html('El campo ubicación no puede estar vacío');
        }
    });
});

function mostrarInfo(data) {
	
    return '<h2> El tiempo en </h2> <h3>' + data.main +  ', ' + data.list[0].sys.country + '</h3>' + '<h2>Tiempo: </h2><h3>' + data.list[0].weather[0].main + '</h3>' + '<h2>Temperatura: </h2><h3>' + data.list[0].main.temp + '</h3>' + '<h2> Humedad: </h2><h3>' + data.list[0].main.humidity + '</h3>';
}