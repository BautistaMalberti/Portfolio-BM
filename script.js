/*----------- BOTON IR ARRIBA -----------------*/

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

/*----------- EASTER EGG FOTO PERFIL -----------------*/

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

/*----------- LEER MAS (PARRAFOS y LISTA TECNOLOGIAS) PROYECTOS -----------------*/

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

/*----------- BOTON VER MAS TEXTO REFERENCIAS -----------------*/

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

/*----------- BOTON PLEGAR NAV -----------------*/

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

/*----------- AÑO ACTUAL EN EL FOOTER-----------------*/

const fechaActual = new Date();
const anio = fechaActual.getFullYear();
const spanAnio = document.getElementById("anio-actual");

spanAnio.textContent = anio;

/*----------- BOTON ANIMACION DE FONDO -----------------*/

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

/*----------- ANIMACION DE TITULO -----------------*/

const titulo = document.querySelector("h1");
const textoFinal = titulo.textContent;
const caracteresAzar = "01";

let letrasReveladas = 0;

const intervalo = setInterval(() => { // ejecuta la funcion declarada dentro cada 50 milisegundos
  const textoAnimado = textoFinal
    .split("")                       // divide el texto (string) en un array de caracteres (el "" indica que se divida por cada caracter)
    .map((letra, index) => {         // ejecuta la funcion declarada dentro para cada elemento del array, y devuelve un nuevo array con los resultados
      if (letra === " ") {            // se saltea los espacios (no muestra caracteres aleatorios en su lugar)
        return " ";
      }
      if (index < letrasReveladas) {  // si la posicion del caracter esta dentro del rango de las letras ya reveladas, devuelve el caracter original de esa posicion
        return textoFinal[index];
      }
      return caracteresAzar[Math.floor(Math.random() * caracteresAzar.length)]; // si no, devuelve un caracter aleatorio del string de caracteresAzar: 
      //math.random() devuelve un numero aleatorio entre 0 (inclusive) y 1 (exclusive), que se multiplica por la longitud del string de caracteresAzar (2); math.floor() redondea este numero hacia abajo para que sea 0 o 1
      //se termina devolviendo el caracter de la posicion 0 o 1, dependiendo de la posicion aleatoria generada
    })
    .join("");  // une el array de caracteres en un string, sin separadores (el "" indica que no haya separadores)

  titulo.textContent = textoAnimado;  // actualiza el contenido del h1 con el texto animado generado

  letrasReveladas += 1;       //Incrementa el contador de letras ya reveladas

  if (letrasReveladas >= textoFinal.length) {   // si ya se han revelado todas las letras:
    titulo.textContent = textoFinal;            // se asegura de que el contenido del h1 sea el texto final (por las dudas)
    clearInterval(intervalo);                   // detiene la ejecucion del intervalo, para que no siga ejecutandose la funcion cada 50 milisegundos
  }
}, 50);

//----------- API PARA CITAS ALEATORIAS -----------------//

const url = "https://echoes.soferity.com/api/quotes/random?lang=es";    //URL de la API pública; /quotes/random es el recurso solicitado; ?lang=es es un parámetro para filtrar las citas en español
const citaTexto = document.getElementById("cita-texto");                
const citaAutor = document.getElementById("cita-autor");                
const controlador = new AbortController();    //crea un objeto que funciona como una "salida" o cancelar para una solicitud

const temporizador = setTimeout(function() {    //temporizador que arranca antes de la solicitud, con un controlador que aborta o cancela la petición pasados 5 segundos
  controlador.abort(); 
}, 5000);

fetch(url, {signal: controlador.signal})      //realiza la solicitud al servidor; como no se especifica otro método, por defecto es GET; {signal: controlador.signal} conecta el controlador con la solicitud, para que aplique el timeout
                                              //fetch no devuelve el recurso inmediatamente, es como una "promesa"; lo recibido se envia al then como parametro
  .then(function (respuesta) {                //los bloques "then" reaccionan a la respuesta del servidor; 
    if (!respuesta.ok) {                      //Si la respuesta no fue exitosa (codigo HTTP No está entre 200 y 299)
      throw new Error("Error http: " + respuesta.status);   //lanza un error manualmente, que incluye el codigo de la respuesta (suele ser 404 o 500)
    }                           
    return respuesta.json()     //convierte el texto de respuesta en un objeto JS (JSON); esto toma tiempo, entonces es otra "promesa"; lo que se devuelve aca es recibido por el siguiente then
  })                            //Todo este bloque es necesario porque fetch solo falla ante problemas de red; cualquier codigo de error, fetch lo toma como una respuesta válida, por lo que hay que manejarla por separado

  .then(function (datos) {     //"datos" es el objeto que ya se convirtió (lo recibido del then anterior), que tiene esta forma: { id: 42, lang: "es", author: "...", quote: "..." }
    const texto = datos.content || datos.quote;   //probé con APIs distintas, que usaban propiedades diferentes para acceder a la cita como tal, por eso contempla una O la otra, pero la API actual (echoes) usa .quote
    const autor = datos.author;                   //accede al contenido del dato "autor"

    if (!texto || !autor) {                                         //si el texto o el autor no existen
      throw new Error("La respuesta no tiene el formato esperado"); //lanza un error manual y salta directamente al .catch
    }

    citaTexto.textContent = "«" + texto + "»";    //modifica el contenido de texto del elemento HTML con la cita, añadiendole los « » al string
    citaAutor.textContent = autor;                //modifica el contenido de texto del elemento HTML con el autor
  })

  .catch(function (error) {                       //este bloque captura cualquier error que haya ocurrido durante la comunicacion con el servidor, en cualquier paso anterior
    if (error.name === "AbortError") {            //error de timeout; pasaron los 5 segundos sin respuesta (lo escribe en la consola)
      console.error("Timeout: el servidor tardó más de 5 segundos."); //console.error escribe el mensaje en rojo, distinguiendolo de un console.log
    } else {    //por alguna otra razon, no se pudo conseguir la cita del servidor:
      console.error("No se pudo obtener la cita:", error);    
    }
    citaTexto.textContent = "«Seamos libres, que lo demás no importa nada»"   //Frase que se coloca en caso de cualquier error que impida cargar la cita, para que no quede el texto "Cargando frase..."
    citaAutor.textContent = "José de San Martín"
  })

  .finally(function () {        //bloque que se ejecuta siempre, haya salido bien o mal
    clearTimeout(temporizador); //"apaga" el temporizador que se habia inicializado antes
  });