/* ====================================
   Palette Pro
   palette.js
==================================== */

// Convierte HEX a HSL
function hexToHsl(hex){

    hex = hex.replace("#","");

    let r = parseInt(hex.substring(0,2),16)/255;
    let g = parseInt(hex.substring(2,4),16)/255;
    let b = parseInt(hex.substring(4,6),16)/255;

    let max=Math.max(r,g,b);
    let min=Math.min(r,g,b);

    let h,s,l=(max+min)/2;

    if(max===min){

        h=0;
        s=0;

    }else{

        let d=max-min;

        s=l>0.5 ? d/(2-max-min) : d/(max+min);

        switch(max){

            case r:
                h=(g-b)/d+(g<b?6:0);
                break;

            case g:
                h=(b-r)/d+2;
                break;

            case b:
                h=(r-g)/d+4;
                break;

        }

        h*=60;

    }

    return {
        h:h,
        s:s*100,
        l:l*100
    };

}

// Convierte HSL a HEX
function hslToHex(h,s,l){

    s/=100;
    l/=100;

    let c=(1-Math.abs(2*l-1))*s;
    let x=c*(1-Math.abs((h/60)%2-1));
    let m=l-c/2;

    let r=0,g=0,b=0;

    if(h<60){r=c;g=x;}
    else if(h<120){r=x;g=c;}
    else if(h<180){g=c;b=x;}
    else if(h<240){g=x;b=c;}
    else if(h<300){r=x;b=c;}
    else{r=c;b=x;}

    r=Math.round((r+m)*255);
    g=Math.round((g+m)*255);
    b=Math.round((b+m)*255);

    return "#" +
        r.toString(16).padStart(2,"0") +
        g.toString(16).padStart(2,"0") +
        b.toString(16).padStart(2,"0");

}

// Paleta complementaria
function generarComplementaria(hex){

    let hsl=hexToHsl(hex);

    return hslToHex(
        (hsl.h+180)%360,
        hsl.s,
        hsl.l
    );

}

// Paleta análoga
function generarAnaloga(hex){

    let hsl=hexToHsl(hex);

    return [

        hslToHex((hsl.h-30+360)%360,hsl.s,hsl.l),

        hex,

        hslToHex((hsl.h+30)%360,hsl.s,hsl.l)

    ];

}

// Paleta triádica
function generarTriadica(hex){

    let hsl=hexToHsl(hex);

    return [

        hex,

        hslToHex((hsl.h+120)%360,hsl.s,hsl.l),

        hslToHex((hsl.h+240)%360,hsl.s,hsl.l)

    ];

}
