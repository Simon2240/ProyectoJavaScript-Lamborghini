const productos = [
    { id: "1", nombre: "LAMBORGHINI HURACAN STO", class: 1, detalle: "Lamborghini Huracan STO is available right now!", categoria: "Deportivo", precio: "650.000", img: "../imagenesjs/huracan.png" },
    { id: "2", nombre: "Lamborghini Huracan EVO RWD Spyder", class: 1, detalle: "Lamborghini Huracan EVO RWD Spyder is available right now!", categoria: "Deportivo", precio: "750.000", img: "../imagenesjs/huracanAzul.png" },
    { id: "4", nombre: "Lamborghini Huracan EVO Spyder", class: 1, detalle: "Lamborghini Huracan EVO Spyder is available right now! ", categoria: "Deportivo", precio: "880.000", img: "../imagenesjs/huracanblanco.png" },
    { id: "3", nombre: "Lamborghini Huracan EVO RWD", class: 1, detalle: "Lamborghini Huracan EVO RWD is available right now! ", categoria: "Deportivo", precio: "850.500", img: "../imagenesjs/huracanAmarillo.png" },
    
    { id: "5", nombre: "Lamborghini Huracan EVO", class: 1, detalle: "Lamborghini Huracan EVO is available right now!", categoria: "Deportivo", precio: "600.000", img: "../imagenesjs/huracanVerde.png" },

    { id: "6", nombre: "Lamborghini Aventador Ultimae Roadster", class: 2, detalle: "Lamborghini Aventador Ultimae Roadster is available right now!", categoria: "Familiar", precio: "1.500.000", img: "../imagenesjs/aventadorAzul.png" },
    { id: "7", nombre: "Lamborghini Aventador Ultimae", class: 2, detalle: "Lamborghini Aventador Ultimae is available right now!", categoria: "Familiar", precio: "1.000.000", img: "../imagenesjs/aventadorGris.png" },

    { id: "8", nombre: "Lamborghini URUS", class: 3, detalle: "Lamborghini URUS is available right now!", categoria: "Familiar", precio: "850.000", img: "/imagenesjs/urusamarilla.png" },
    { id: "9", nombre: "Lamborghini URUS Roadster", class: 3, detalle: "Lamborghini URUS is available right now!", categoria: "Familiar", precio: "850.000", img: "../imagenesjs/urusnegra.png" },
    { id: "10", nombre: "Lamborghini URUS Pear Capsule", class: 3, detalle: "Lamborghini URUS is available right now!", categoria: "Familiar", precio: "870.000", img: "../imagenesjs/urusverde.png" }
    
];


function Huracanes() {

    let huracan = productos.filter(eleme => eleme.class === 1);
    let etiqueta = document.getElementById("cards"); 
    for (producto of huracan) {

        etiqueta.innerHTML +=`
        <div class="container-productos-huracan" id="contenedorProductos>
            <div class="card-lambos-huracan">
                <img src="${producto.img}" alt="${producto.alt}">
                <div class="card-contenido">
                    <h5 class="card-h-huracan">${producto.nombre}</h5>
                    <p class="card-p-huracan">${producto.detalle}</p>
                    <p class="card-p2-huracan">The Lamborghini Huracán is equipped with a 5.2-liter naturally aspirated V10 engine that produces 640 horsepower with a maximum torque of 565 Newton meters. The gearbox is automatic with seven speeds and derives all the power from the engine to the rear axle. Its top speed is 310 km/h.</p>
                    <a href="./contact.html">
                        <button id="${producto.id}" href="/" class="agregar">CONTACT</button>
                    </a>
                </div>
            </div>
        </div>`
    }
    
}
Huracanes(); 



function Aventador() {

    let aventador = productos.filter(eleme => eleme.class === 2);
    
    let etiqueta = document.getElementById("cards1"); 
    for (producto of aventador) {

        etiqueta.innerHTML +=`
        <div class="container-productos-aventador" id="contenedorProductos>
            <div class="card-lambos-aventador">
                <img src="${producto.img}" alt="${producto.alt}">
                <div class="card-contenido-aventador">
                    <h5 class="card-h-aventador">${producto.nombre}</h5>
                    <p class="card-p-aventador">${producto.detalle}</p>
                    <p class="card-p2-aventador">The Lamborghini Aventador, the natural substitute for the Murciélago, is a two-seater supercar that has a naturally aspirated 6,500 cc V12 engine and four-wheel drive.</p>
                    <a href="./contact.html">
                        <button id="${producto.id}" href="/" class="agregar">CONTACT</button>
                    </a>
                </div>
            </div>
        </div>`
    }
    
}
Aventador();




function URUS() {
    let urus = productos.filter(eleme => eleme.class === 3);
    let etiqueta = document.getElementById("cards2"); 
    for (producto of urus) {

        etiqueta.innerHTML +=`
        <div class="container-productos-urus" id="contenedorProductos>
            <div class="card-lambos-urus">
                <img src="${producto.img}" alt="${producto.alt}">
                <div class="card-contenido-urus">
                    <h5 class="card-h-urus">${producto.nombre}</h5>
                    <p class="card-p-urus">${producto.detalle}</p>
                    <p class="card-p2-urus">Powered by a 4.0-litre twin-turbocharged V8 engine generating 650PS of power and 850Nm of torque, the Urus accelerates from 0-100km/h in 3.6 seconds and reaches a top speed of 305km/h.</p>
                    <a href="./contact.html">
                        <button id="${producto.id}" href="/" class="agregar">CONTACT</button>
                    </a>
                </div>
            </div>
        </div>`
    }
    
}
URUS();

/*  EFECTOS CARDS */

$("#cards").prepend('<div class="imagen-cards"><img src="../imagenesjs/sto_monza_milano.jpg" alt=""></div>');
$(".imagen-cards").hide(); 
$(".imagen-cards").delay(1); 
$(".imagen-cards").slideDown(3500);  

$("#cards").prepend('<div class="imagen-cards2"><img src="../imagenesjs/contenedor6.png" alt=""></div>');
$(".imagen-cards2").hide(); 
$(".imagen-cards2").delay(1); 
$(".imagen-cards2").slideDown(5000);  

$("#cards").prepend('<div class="imagen-cards3"><img src="../imagenesjs/contenedor11.png" alt=""></div>');
$(".imagen-cards3").hide(); 
$(".imagen-cards3").delay(1); 
$(".imagen-cards3").slideDown(6700);  

$("#cards").prepend('<div class="imagen-cards4"><img src="../imagenesjs/contenedor13.png" alt=""></div>');
$(".imagen-cards4").hide(); 
$(".imagen-cards4").delay(1); 
$(".imagen-cards4").slideDown(9500); 

$("#cards").prepend('<div class="imagen-cards5"><img src="../imagenesjs/contenedor12.png" alt=""></div>');
$(".imagen-cards5").hide(); 
$(".imagen-cards5").delay(1); 
$(".imagen-cards5").slideDown(11500);

/*  EFECTOS CARDS 1 */

$("#cards1").prepend('<div class="imagen-cards6"><img src="../imagenesjs/contenedor17.png" alt=""></div>');
$(".imagen-cards6").hide(); 
$(".imagen-cards6").delay(1); 
$(".imagen-cards6").slideDown(15500); 

$("#cards1").prepend('<div class="imagen-cards7"><img src="../imagenesjs/contenedor14.png" alt=""></div>');
$(".imagen-cards7").hide(); 
$(".imagen-cards7").delay(1); 
$(".imagen-cards7").slideDown(16500);

/*  EFECTOS CARDS 2 */

$("#cards2").prepend('<div class="imagen-cards8"><img src="../imagenesjs/contenedor4.jpg" alt=""></div>');
$(".imagen-cards8").hide(); 
$(".imagen-cards8").delay(1); 
$(".imagen-cards8").slideDown(17500); 

$("#cards2").prepend('<div class="imagen-cards9"><img src="../imagenesjs/contenedor19.jpg" alt=""></div>');
$(".imagen-cards9").hide(); 
$(".imagen-cards9").delay(1); 
$(".imagen-cards9").slideDown(18000);

$("#cards2").prepend('<div class="imagen-cards10"><img src="../imagenesjs/contenedor25.jpg" alt=""></div>');
$(".imagen-cards10").hide(); 
$(".imagen-cards10").delay(1); 
$(".imagen-cards10").slideDown(19000); 

/* LOGO */

$("#cards").prepend('<div class="imagen-logosar"><img src="../imagenesjs/Lambo-Logo.png" alt=""></div>');

$("#cards1").prepend('<div class="imagen-logosar1"><img src="../imagenesjs/Lambo-Logo.png" alt=""></div>');

$("#cards2").prepend('<div class="imagen-logosar2"><img src="../imagenesjs/Lambo-Logo.png" alt=""></div>');





































/* JQUERY /*

$(()=> {

    $('#caja1').html(`<button id="botonn">Haz click aqui</button>`);

    $('#botonn').click('beforeunload', ()=> {

        alert("haz dado click");
    })

}); */


/* section 1 */

/* $(".") */

/* section 2 */




