function validateDNI() {

    var dni = $("#logdni").val();

    var aux = false;
    $.ajax({
        url: "/api/DNI/" + dni,
        type: "GET",
        dataType: "json",
        async: false,
        statusCode: {
            200: function() {
                alert(`El DNI ingresado ya ha realizado su voto`)
                aux = false;
            },
            404: function() {
                aux = true;    
            }
        }      
    })
    return aux;
};