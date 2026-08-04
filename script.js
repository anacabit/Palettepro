¡Sí! Este es el archivo más importante. El script.js hará que Palette Pro empiece a funcionar.

Te dejo una versión 0.1 funcional.

Guárdala como script.js en la misma carpeta donde están index.html y style.css.

/* ===========================
   PALETTE PRO v0.1
=========================== */

// Obtener todos los selectores
const colores = [
document.getElementById("color1"),
   
document.getElementById("color2"),
document.getElementById("color3"),
document.getElementById("color4"),
document.getElementById("color5"),
document.getElementById("color6")
];const colorPrincipal = document.getElementById("color1").value;

const analoga = generarAnaloga(colorPrincipal);

console.log(analoga);

// Obtener los HEX
const hex = [
document.getElementById("hex1"),
document.getElementById("hex2"),
document.getElementById("hex3"),
document.getElementById("hex4"),
document.getElementById("hex5"),
document.getElementById("hex6")
];

// Sincronizar rueda y HEX
colores.forEach((color,index)=>{

color.addEventListener("input",()=>{

hex[index].value=color.value;

actualizarVista();

});

});

// Escribir HEX manualmente
hex.forEach((campo,index)=>{

campo.addEventListener("input",()=>{

if(/^#[0-9A-Fa-f]{6}$/.test(campo.value)){

colores[index].value=campo.value;

actualizarVista();

}

});

});

// Vista previa
function actualizarVista(){

const principal=colores[0].value;
const secundario=colores[1].value;
const fondo=colores[2].value;

document.querySelector(".hero button").style.background=principal;

document.querySelector(".navbar").style.background=principal;

document.querySelectorAll(".card").forEach(card=>{

card.style.borderTop="6px solid "+secundario;

});

document.querySelector(".preview").style.background=fondo;

}

// Generar 5 paletas
document.getElementById("generar").addEventListener("click",()=>{

const contenedor=document.getElementById("paletas");

contenedor.innerHTML="";

for(let i=0;i<5;i++){

let fila=document.createElement("div");

fila.style.display="flex";

fila.style.marginBottom="10px";

for(let j=0;j<5;j++){

let c=document.createElement("div");

c.style.width="70px";

c.style.height="50px";

c.style.marginRight="6px";

let color="#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");

c.style.background=color;

c.title=color;

// Copiar color
c.onclick=function(){

navigator.clipboard.writeText(color);

alert("Color copiado: "+color);

};

fila.appendChild(c);

}

contenedor.appendChild(fila);

}

});

// Ejecutar al abrir
actualizarVista();


---

✅ Esta versión ya hace lo siguiente

🎨 Cambiar los colores con la rueda.

✍️ Escribir el HEX manualmente.

🖥️ Cambiar la vista previa.

🌈 Generar 5 paletas.

📋 Copiar un color tocándolo.



---

Lo siguiente que construiremos (v0.2)

Quiero que la aplicación deje de generar colores totalmente aleatorios y pase a crear paletas inteligentes.

Por ejemplo, si eliges un azul como color principal, la aplicación generará automáticamente:

Complementaria.

Análoga.

Triádica.

Monocromática.

Pastel.


Así las paletas tendrán armonía de color y serán mucho más útiles para diseño web.

Creo que esa será la primera característica que hará que Palette Pro empiece a diferenciarse de otras herramientas.
