const frases = [
    "Para mi niña bonita, con mucho cariño",
    "El primer día de cita en el parque, el día de nuestro primer beso. Desde ese día amo acostarme debajo de los árboles a sentir la frescura de ellos",
    "Los parques representan momentos especiales, como el día en el que nos hicimos pololindas",
    "Los días en casa se han hecho mis favoritos paraestar juntas",
    "Cada salida contigo es formar un nuevo recuerdo especial",










    "Eres el amor de mi vida, la mujer de mis sueños, la persona de mis anhelos, simplemente, eres mi todo"
];

const fotos = [
    "foto1.jpg.jpeg", 
    "foto2.jpg.jpeg", 
    "foto3.jpg.jpeg",
    "foto4.jpg.jpeg",
    "foto5.jpg.jpeg",
    "foto6.jpg.jpeg",
    "foto7.jpg.jpeg",
    "foto8.jpg.jpeg",
    "foto9.jpg.jpeg",
    "foto10.jpg.jpeg",
    "foto11.jpg.jpeg",
    "foto12.jpg.jpeg",
    "foto13.jpg.jpeg",
    "foto14.jpg.jpeg",
    "foto15.jpg.jpeg",
    "foto16.jpg.jpeg",
    "foto17.jpg.jpeg",
];

let i = 0;

function cambiar() {
    i = (i + 1) % frases.length;
    document.getElementById("texto").innerHTML = frases[i];
    document.getElementById("imagen").src = fotos[i];