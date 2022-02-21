

/* LOCAL STORAGE */

let datos = [];

let allDatos = [];

function guardarlocalstorage() {

    datos = [];

    /* agrego valores */

    datos.push($("#name").val());
    datos.push($("#email").val());
    datos.push($("#text-message").val());

    /* almacene el array dentro del el array allDato*/

    allDatos.push(datos);

    arjson = JSON.stringify(allDatos);

    localStorage.setItem("form-contact", arjson);
};


/* API MAPS */
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.65713, lng: 11.11793},
        zoom: 7,
    });
    
}
/* LA API NO MARCA EL LUGAR DONDE TRABAJA LAMBORGHINI, LE AGREGUE UN ZOOM PARA QUE SE VEA MAS CLARO CALLE: (VIA FERRUCCIO LAMBORGHINI) */


