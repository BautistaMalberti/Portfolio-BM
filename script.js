const btnArriba = document.getElementById("arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnArriba.style.opacity = "1";
  } else {
    btnArriba.style.opacity = "0";
  }
});

btnArriba.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth" });
});

const fotoperfil = document.getElementById("foto-perfil");
let contadorclicks = 0;

fotoperfil.addEventListener("click", () => {
  contadorclicks ++; 

  if (contadorclicks === 10){
    fotoperfil.src = "img/cataway.gif";
    contadorclicks = 0;
 
    setTimeout( () => {
      fotoperfil.src = "img/perfil.png";
    }, 4200);
  }
});

const articulos = document.querySelectorAll("#Proyectos article");

for(let i = 0; i < articulos.length; i++){
  let articulo = articulos[i];
  let listaTec = articulo.querySelector("ul");
  let parrafo = articulo.querySelector("p");
  let clicks = 0;
  let leermasArriba = articulo.querySelector(".leermas-arriba");
  let leermasAbajo = articulo.querySelector(".leermas-abajo");

  articulo.addEventListener("click", () => {
    clicks ++;

    if (clicks === 1){
      parrafo.style.maxHeight = "1000px";
      parrafo.style.opacity = "1";
      leermasArriba.style.display = "none";
      leermasAbajo.style.display = "block";
    }
    else if (clicks == 2){
      listaTec.style.maxHeight = "500px";
      listaTec.style.opacity = "1";
      leermasAbajo.style.display = "none";
    }
    else{
      parrafo.style.maxHeight = "0";
      parrafo.style.opacity = "0";
      listaTec.style.maxHeight = "0";
      listaTec.style.opacity = "0";
      leermasArriba.style.display = "block";
      clicks = 0;
    }
  });
}

const referencias = document.querySelectorAll("#referencias-calif .referencia");

for (let i = 0; i < referencias.length; i++){
  let referencia = referencias[i]
  let textoExtra = referencia.querySelector(".texto-extra")
  let boton = referencia.querySelector(".btn-verMas")

  boton.addEventListener("click", () => {
    if (textoExtra.style.maxHeight === "0px" || textoExtra.style.maxHeight === "") {
      textoExtra.style.maxHeight = "1000px";
      textoExtra.style.opacity = "1";
      boton.textContent = "Ver menos";
    }
    else {
      textoExtra.style.maxHeight = "0px"
      textoExtra.style.opacity = "0";
      boton.textContent = "Ver mas";
    }
  });
}

const botonPlegar = document.querySelector("#plegar");
const menuNav = document.querySelector("header nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    botonPlegar.style.opacity = "1";
    botonPlegar.style.pointerEvents = "auto";
  } else {
    botonPlegar.style.transform = "rotate(0deg)";
    botonPlegar.style.opacity = "0";
    botonPlegar.style.pointerEvents = "none";
    menuNav.style.maxHeight = "500px";
    menuNav.style.opacity = "1"
    menuNav.style.padding = "1px 0";
    menuNav.style.borderWidth = "4px";
  }
});

botonPlegar.addEventListener("click", () => {
  if (menuNav.style.maxHeight === "0px") {
    botonPlegar.style.transform = "rotate(0deg)";
    menuNav.style.maxHeight = "500px";
    menuNav.style.opacity = "1"
    menuNav.style.padding = "1px 0";
    menuNav.style.borderWidth = "4px";

  } else {
    botonPlegar.style.transform = "rotate(90deg)";
    menuNav.style.maxHeight = "0px";
    menuNav.style.opacity = "0"
    menuNav.style.padding = "0";
    menuNav.style.borderWidth = "0";
  }
});

const fechaActual = new Date();
const anio = fechaActual.getFullYear();
const spanAnio = document.getElementById("anio-actual");

spanAnio.textContent = anio;

const botonFondo = document.querySelector("#fondo");
let estadoFondo = 0;

botonFondo.addEventListener("click", () => {
  estadoFondo ++;
  if (estadoFondo === 1){
    document.body.style.animationPlayState = "paused";
  }
  else if (estadoFondo === 2){
    document.body.style.backgroundImage = "none";
  }
  
  else{
    document.body.style.animationPlayState = "";
    document.body.style.backgroundImage = "";
    estadoFondo = 0;
  }
});


const titulo = document.querySelector("h1");
const textoFinal = titulo.textContent;
const caracteresAzar = "01";

let letrasReveladas = 0;

const intervalo = setInterval(() => {
  const textoAnimado = textoFinal
    .split("")
    .map((letra, index) => {
      if (letra === " ") {
        return " ";
      }
      if (index < letrasReveladas) {
        return textoFinal[index];
      }
      return caracteresAzar[Math.floor(Math.random() * caracteresAzar.length)];
    })
    .join("");

  titulo.textContent = textoAnimado;

  letrasReveladas += 1;

  if (letrasReveladas >= textoFinal.length) {
    titulo.textContent = textoFinal;
    clearInterval(intervalo);
  }
}, 50);