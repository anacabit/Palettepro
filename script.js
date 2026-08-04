/* ==========================================
   Palette Pro
   script.js v0.2
========================================== */

// ==============================
// SELECTORES
// ==============================

const colores = [
    document.getElementById("color1"),
    document.getElementById("color2"),
    document.getElementById("color3"),
    document.getElementById("color4"),
    document.getElementById("color5"),
    document.getElementById("color6")
];

const hex = [
    document.getElementById("hex1"),
    document.getElementById("hex2"),
    document.getElementById("hex3"),
    document.getElementById("hex4"),
    document.getElementById("hex5"),
    document.getElementById("hex6")
];

// ==============================
// SINCRONIZAR COLOR ↔ HEX
// ==============================

colores.forEach((color,index)=>{

    color.addEventListener("input",()=>{

        hex[index].value=color.value;

        actualizarVista();

    });

});

hex.forEach((campo,index)=>{

    campo.addEventListener("input",()=>{

        if(/^#[0-9A-Fa-f]{6}$/.test(campo.value)){

            colores[index].value=campo.value;

            actualizarVista();

        }

    });

});

// ==============================
// VISTA PREVIA
// ==============================

function actualizarVista(){

    const principal=colores[0].value;
    const secundario=colores[1].value;
    const fondo=colores[2].value;

    document.querySelector(".navbar").style.background=principal;

    document.querySelector(".hero button").style.background=principal;

    document.querySelectorAll(".card").forEach(card=>{

        card.style.borderTop="6px solid "+secundario;

    });

    document.querySelector(".preview").style.background=fondo;

}

// ==============================
// GENERAR PALETAS
// ==============================

document.getElementById("generar").addEventListener("click",()=>{

    const colorPrincipal=colores[0].value;

    const analoga=generarAnaloga(colorPrincipal);

    const triadica=generarTriadica(colorPrincipal);

    const complementario=generarComplementaria(colorPrincipal);

    const contenedor=document.getElementById("paletas");

    contenedor.innerHTML="";

    mostrarFila("Análoga",analoga);

    mostrarFila("Triádica",triadica);

    mostrarFila("Complementaria",[

        colorPrincipal,

        complementario

    ]);

});

// ==============================
// DIBUJAR UNA PALETA
// ==============================

function mostrarFila(nombre,paleta){

    const contenedor=document.getElementById("paletas");

    const titulo=document.createElement("h3");

    titulo.textContent=nombre;

    contenedor.appendChild(titulo);

    const fila=document.createElement("div");

    fila.style.display="flex";

    fila.style.gap="8px";

    fila.style.marginBottom="20px";

    paleta.forEach(color=>{

        const bloque=document.createElement("div");

        bloque.style.width="80px";

        bloque.style.height="60px";

        bloque.style.borderRadius="10px";

        bloque.style.background=color;

        bloque.style.cursor="pointer";

        bloque.title=color;

        bloque.onclick=function(){

            navigator.clipboard.writeText(color);

            alert("Copiado: "+color);

        };

        fila.appendChild(bloque);

    });

    contenedor.appendChild(fila);

}

// ==============================
// INICIAR
// ==============================

actualizarVista();
