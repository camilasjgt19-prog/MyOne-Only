const frases = [
    "Para mi niña bonita, con mucho cariño", // ESTA SALDRÁ SIN FOTO
    "El primer día de cita en el parque, el día de nuestro primer beso. Desde ese día amo acostarme debajo de los árboles a sentir la frescura de ellos",
    "Los parques representan momentos especiales, como el día en el que nos hicieron pololindas",
    "Los días en casa se han hecho mis favoritos para estar juntas",
    "Cada salida contigo es formar un nuevo recuerdo especial",
    "Cada vez que me miras fijamente y me das un besito, siento que el mundo se detiene y solo existimos tú y yo",
    "Los momentos de familia tradicional me hacen sentir que tu eres mi hogar",
    "La cantidad de cariño y amor que emanas me hace sentir la persona más especial del mundo",
    "Tu sonrisa y tus vibes tan lindas me alegran mi vida",
    "Cuando vuelvo a mirar todas las fotos que he tomado de nosotras no puedo evitar sentirme tan feliz por tener esos recuerdos contigo",
    "Irnos de viaje en nuestros aniversarios son los momentos que mas espero y la tradición que mas amo de nosotras",
    "Cada beso que me das, simple, suave, apasionado o profundo me hace sentir la persona mas amada y enamorada",
    "Te quiero dar millones de besos y abrazos por el resto de mi vida",
    "El amor que sienti por ti se refleja en mi día a día y en lo mucho que cquiero cuidar de tu corazón",
    "Te veo y solo puedo pensar en que eres la persona más maravillosa y hermosa del mundo ",
    "Quiero llevarte conmigo a donde vaya porque eres mi lugar favorito",
    "Para la persona más linda y preciosa y bonita y especial e increible del mundo, te amo mi ani",
    "Eres el amor de mi vida, la mujer de mis sueños, la persona de mis anhelos, simplemente, eres mi todo"
];

const fotos = [
    "",// ESPACIO VACÍO PARA LA PRIMERA FRASE
    "foto1.jpg.jpeg", "foto2.jpg.jpeg", "foto3.jpg.jpeg", "foto4.jpg.jpeg",
    "foto5.jpg.jpeg", "foto6.jpg.jpeg", "foto7.jpg.jpeg", "foto8.jpg.jpeg",
    "foto9.jpg.jpeg", "foto10.jpg.jpeg", "foto11.jpg.jpeg", "foto12.jpg.jpeg",
    "foto13.jpg.jpeg", "foto14.jpg.jpeg", "foto15.jpg.jpeg", "foto16.jpg.jpeg",
    "foto17.jpg.jpeg", "foto1.jpg.jpeg" // Agregué una extra para que coincida con la cantidad de frases
];

let i = 0;

function cambiar() {
    i = (i + 1) % frases.length;
    
    const elementoTexto = document.getElementById("texto");
    const elementoImagen = document.getElementById("imagen");

    if (elementoTexto && elementoImagen) {
        elementoTexto.innerHTML = frases[i];

        // Si el nombre de la foto está vacío (como en la posición 0), ocultamos la imagen
        if (fotos[i] === "") {
            elementoImagen.style.display = "none";
        } else {
            elementoImagen.style.display = "block";
            elementoImagen.src = fotos[i];
        }
    }
}




