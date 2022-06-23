/*  //prompt + alert
let milanesa = prompt("Milanesa de pollo o carne?")
let acompanamiento = prompt("con pure o con ensalada?")
alert("Te invito a comer milanesa de " + milanesa + " con " + acompanamiento + ". Pero la cerveza la pagás vos")*/

/* switch (milanesa) {
    case "carne":
            alert("Te invito a comer milanesa de " + milanesa)
        break;
        case "pollo":
                alert("Te invito a comer milanesa de " + milanesa)
        break;

    default:
            alert("Falta de respeto. Eso no se puede llamar milanesa ")
        break;
}

let amigos = prompt("Con cuántos/as amigos/as te vas a juntar el finde?")
let cocas = prompt("Cuántos/as toman fernet?")
let cantidadCocas = cocas * 2
alert("Si son " + amigos + " vas a tener que comprar " + cantidadCocas + " cocas porque se van a quedar cortos/as sino")


//multiplicación
let anos = prompt("Cuántos años tenés?")
let numeroFav = prompt("Tu número favorito del 1 al 10")
let pesos = (anos * numeroFav) / 3
alert("Hoy te vas a encontrar $ " + pesos )

//imprimir en el HTML // se usan comillas simples invertidas */
let imprimirEnPantalla = document.getElementById("imprimirEnHTML");
let contadoresMayoresEnPantalla = document.getElementById("contadorMayores");
let contadoresMenoresEnPantalla = document.getElementById("contadorMenores");
let cantidadSociosEnPantalla = document.getElementById("cantidadSocios");
let totalesEnPantalla = document.getElementById("totales");
/*
imprimirEnPantalla.innerHTML= `
<h1> Hoy vienen ${amigos} amigos a tu casa y ${cocas} van a tomar Fernet </h1>
<h3> Así que por favor no te olvides las ${cantidadCocas} cocas. Sino las milanesas de ${milanesa} les quedan atoradas</h3>
`;

//condicional --> el + antes del = concatena con el mensaje anterior
if (amigos >= 6){
    imprimirEnPantalla.innerHTML += `<h3> uufff ` + amigos + ` ...Son muchos. Linda juntada. </h3>`;
}else {
    imprimirEnPantalla.innerHTML += `<h3> Algo íntimo, me gusta </h3>`;
}

// Ciclo
for(let i = 1; i <= amigos; i++ ){
    imprimirEnPantalla.innerHTML += ` El amigo` + ` ` + i + ` `;
}


//switch
switch (amigos % 2) {
    case 0:
        imprimirEnPantalla.innerHTML += ` <h2> Si son ` + amigos + ` da para jugar al truco en parejas. Pueden armar ` + (amigos)/2 +  ` equipos. </h2>`
        break;

    default:
            imprimirEnPantalla.innerHTML += `<h2> Si son ${amigos} les falta 1 para el truco <h2>`
        break;
}

//calculadora
for (let i = 1; i <=10 ; i++){
for (let y = 1; y <=10; y++) {
    imprimirEnPantalla.innerHTML += ` <h1> Calculadora. Tabla del ${i} </h1>
    <h2> ${i} X ${y} = ${i * y} <h2>`
}
}




let copasInternacionales = 22
let copasNacionales = 16 
let torneosLocales = 34

let torneosBoca = copasInternacionales + copasNacionales + torneosLocales

console.log ("Boca tiene " + torneosBoca + " trofeos entre copas y torneos") */


/* let plan = prompt ("El plan médico que necesitás es individual o es familiar?")

const familia = prompt("Cuántos son en la familia? (incluyéndote)")

const individual = prompt ("")

class cliente {
 constructor(nombreCompleto, edad){
 this.nombreCompleto = nombreCompleto;
 this.edad = edad;
}
}

switch (plan) {
    case individual:
        imprimirEnPantalla.innerHTML += ` <h2> El plan que mejor se adapta a tus necesidades tiene un valor de $500 final. </h2>` 
        break;

    case familiar:
        imprimirEnPantalla.innerHTML += ` <h2> Si son ` + familia + ` sería mejor este plan. El valor es de $ ` + (familia)*405,6 +  ` total. </h2>`
        break;

    default:
            imprimirEnPantalla.innerHTML += `<h2> No existe el plan que estás buscando <h2>`
        break;
} */

/* let nombre = prompt ("Hola! ingresar nombre del socio")
let edad = prompt ("¿Cuántos años tiene " + nombre + "?") */

const ano = new Date();


 class socio {
    constructor (nombre, edad, aleatorio) {
this.nombre = nombre;
this.edad = edad;
this.numeroDeSocio = aleatorio;
this.anoActual = ano.getFullYear();
    }
    anoDeNacimiento(){
       return this.anoActual - this.edad;
    }
}



const nuevosSocios = [];

nuevosSocios.push(new socio("Beni", 2, aleatorio()));
nuevosSocios.push(new socio("Oscar", 34, aleatorio()));  
nuevosSocios.push(new socio("Cecilia", 33, aleatorio()));  
nuevosSocios.push(new socio("Mila", 3, aleatorio()));
nuevosSocios.push(new socio("Malena", 18, aleatorio()));
nuevosSocios.push(new socio("Alberto", 65, aleatorio()));
nuevosSocios.push(new socio("Mirna", 54, aleatorio()));
nuevosSocios.push(new socio("Sergio", 4, aleatorio()));
nuevosSocios.push(new socio("Laura", 1, aleatorio()));
nuevosSocios.push(new socio("Matias", 18, aleatorio()));




// número aleatorio
function aleatorio(){
    return Math.round (Math.random() * 10000);
  }



// Muestra en pantalla los socios y sus respectivos datos 
for (const socio of nuevosSocios) {  
    const index = nuevosSocios.indexOf(socio);
    cantidadSocios.innerHTML += `<div> <button id="borrarSocio">Borrar</button> Registro: ${index + 1} - Nombre: ${socio.nombre} / ` + ` Edad: `+ socio.edad + ` / Año nacimiento: ${socio.anoDeNacimiento()} / Número de socio ${socio.numeroDeSocio}</div> <br> `;
} 

// contador de socios
console.log(nuevosSocios);
totalesEnPantalla.innerHTML = `<h1>Cantidad de socios: ${nuevosSocios.length}</h1> <br>`


 // Comparador para determinar si un socio es menor o mayor
    const menores = nuevosSocios.filter(socio => socio.edad <= 10)
    console.log(menores)
    
    const menoresEdad = [];
  for (let index = 0; index < menores.length; index++) {
        menoresEdad.push(menores[index].nombre)
    }

    const mayores = nuevosSocios.filter(socio => socio.edad > 10)
    console.log(mayores)

    const mayoresEdad = [];
    for (let index = 0; index < mayores.length; index++) {
        mayoresEdad.push(mayores[index].nombre)   
    }
    
    // Variable que contiene el array "mayoresEdad" para pasar a string 
    let listaMayores = mayoresEdad.toString(" ");
    contadoresMayoresEnPantalla.innerHTML += `<h2> ${listaMayores} <strong> son mayores de edad </strong> . En total son ${mayoresEdad.length}</h2>` 

    // Variable que contiene el array "menoresEdad" para pasar a string 
    let listaMenores = menoresEdad.toString(" ");
    contadoresMenoresEnPantalla.innerHTML += `<h2> ${listaMenores} <strong> son menores de edad </strong> . En total son ${menoresEdad.length} </h2>` 


    const index = nuevosSocios.indexOf(socio);

    // INGRESO DE DATOS A TRAVÉS DEL FORMULARIO

    // función formulario que recibe un callBack
    const submitFormulario = (ID) => {
        let form = document.getElementById(ID);
        form.addEventListener(`submit`, (event) => {
        event.preventDefault();
        let nombre = form.children[0].value
        let edad = form.children[1].value
        let ultimoSocio = new socio(nombre,parseInt(edad), aleatorio());
        nuevosSocios.push(ultimoSocio);
        console.log(index);
        
        console.log(ultimoSocio);
        console.log(nuevosSocios);

       
        // Muestra en pantalla los socios y sus respectivos datos 
        const indexNuevo = nuevosSocios.indexOf(socio);
        cantidadSocios.innerHTML += `<div class = "datosNuevoSocio"> <button id="borrarSocio">Borrar</button> Registro: ${indexNuevo + 1} - Nombre: ${ultimoSocio.nombre} / ` + ` Edad: `+ ultimoSocio.edad + ` / Año nacimiento: ${ultimoSocio.anoDeNacimiento()} / Número de socio ${ultimoSocio.numeroDeSocio}</div> <br> `;

    // Comparador para determinar si un socio es menor o mayor
    const menores = nuevosSocios.filter(ultimoSocio => ultimoSocio.edad <= 10)
    console.log(menores)
    
    const menoresEdad = [];
  for (let index = 0; index < menores.length; index++) {
        menoresEdad.push(menores[index].nombre)
    }

    const mayores = nuevosSocios.filter(ultimoSocio => ultimoSocio.edad > 10)
    console.log(mayores)

    // Contador de cantidad de socios
totalesEnPantalla.innerHTML = `<div> <h1>Cantidad de socios: ${nuevosSocios.length}</h1> </div>`
console.log('socios totales',nuevosSocios)
const mayoresEdad = [];
    for (let index = 0; index < mayores.length; index++) {
        mayoresEdad.push(mayores[index].nombre)  
    }

    // Variable que contiene el array "mayoresEdad" para pasar a string 
    let listaMayores = mayoresEdad.toString(" ");
    contadoresMayoresEnPantalla.innerHTML = `<div> <h2> ${listaMayores} <strong> son mayores de edad </strong> . En total son ${mayoresEdad.length}</h2> </div> <br>` 

    // Variable que contiene el array "menoresEdad" para pasar a string 
    let listaMenores = menoresEdad.toString(" ");
    contadoresMenoresEnPantalla.innerHTML = `<div> <h2> ${listaMenores} <strong> son menores de edad </strong> . En total son ${menoresEdad.length} </h2> </div>` 


    // Botón para eliminar socios --> REVISAR
  
    let borrar = document.getElementById("borrarSocio")
    borrar.onclick = () => {
        nuevosSocios.filter((indexNuevo) => indexNuevo === ultimoSocio)
        console.log(borrarSocio);
    }
    
    }
        )}

//opción 2 para borrar
function borrarEntrada(nuevosSocios, item) {
    for (let i = nuevosSocios.length; i--;) {
        if (nuevosSocios[i] === item) {
            nuevosSocios.splice(i, 1);
        }
    }
}

borrarEntrada();


    submitFormulario("ingresoSocios");


    