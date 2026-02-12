const frases = [
    "Para mi niña bonita, con mucho cariño",
    "El primer día de cita en el parque, el día de nuestro primer beso. Desde ese día amo ir contigo a esos lugares",
    "Los parques han representado momentos especiales, como el día en el que nos hicimos pololindas",
    "Los días en casa se han hecho mis favoritos para estar contigo",
    "Cada salida contigo es formar un nuevo recuerdo especial",
    "Cada vez que me miras fijamente y me das un besito, siento que el mundo se detiene y solo existimos tú y yo",
    "Los momentos en familia tradicional me hacen sentir que tú eres mi hogar",
    "La cantidad de cariño y amor que emanas me hace sentir la persona más especial del mundo",
    "Tu sonrisa y tus vibes tan lindas me alegran la vida",
    "Cuando vuelvo a mirar todas las fotos que he tomado de nosotras, no puedo evitar sentirme tan feliz por tener esos recuerdos contigo",
    "Irnos de viaje de aniversario es el momento que más espero y la tradición que más me gusta de nosotras",
    "Cada beso que me das, simple, suave, apasionado o profundo, me hace sentir la persona más enamorada",
    "Te quiero dar millones de besos y abrazos por el resto de mi vida",
    "El amor que siento por ti se refleja en mi día a día, y en lo mucho que deseo cuidar de tu corazón",
    "Te veo y solo puedo pensar en que eres la persona más maravillosa y hermosa del mundo ",
    "Quiero llevarte conmigo a donde vaya, porque eres mi lugar favorito",
    "Para la persona más linda, preciosa, bonita, especial e increíble del mundo, te amo mí ani",
    "Eres el amor de mi vida, la mujer de mis sueños, la persona de mis anhelos, simplemente, eres mi todo"
];

const fotos = [
    "foto0.jpg.png", "foto1.jpg.jpeg", "foto2.jpg.jpeg", "foto3.jpg.jpeg", "foto4.jpg.jpeg",
    "foto5.jpg.jpeg", "foto6.jpg.jpeg", "foto7.jpg.jpeg", "foto8.jpg.jpeg",
    "foto9.jpg.jpeg", "foto10.jpg.jpeg", "foto11.jpg.jpeg", "foto12.jpg.jpeg",
    "foto13.jpg.jpeg", "foto14.jpg.jpeg", "foto15.jpg.jpeg", "foto16.jpg.jpeg",
    "foto17.jpg.jpeg"
];

let i = 0;
let musicaIniciada = false; 

function cambiar() {
    if (!musicaIniciada) {
        const cancion = document.getElementById("miMusica");
        if (cancion) {
            cancion.play().catch(error => console.log("Esperando interacción para audio"));
            musicaIniciada = true;
        }
    }
    // ------------------------

    i = (i + 1) % frases.length;
    
    const elementoTexto = document.getElementById("texto");
    const elementoImagen = document.getElementById("imagen");

    if (elementoTexto && elementoImagen) {
        elementoTexto.innerHTML = frases[i];
        elementoImagen.src = fotos[i];
        lanzarDecoracion();
    }
}

function lanzarDecoracion() {
    const emojis = ["❤️", "💖", "🌸", "✨", "🌹", "🌷"];
    for (let k = 0; k < 6; k++) {
        const el = document.createElement("div");
        el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.position = "fixed";
        el.style.left = Math.random() * 100 + "vw";
        el.style.top = "100vh";
        el.style.fontSize = (Math.random() * 20 + 20) + "px";
        el.style.zIndex = "100";
        el.style.pointerEvents = "none";
        el.style.transition = "all 3s ease-out";
        document.body.appendChild(el);

        setTimeout(() => {
            el.style.top = "-10vh";
            el.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(360deg)`;
            el.style.opacity = "0";
        }, 50);

        setTimeout(() => { el.remove(); }, 3000);
    }
}










