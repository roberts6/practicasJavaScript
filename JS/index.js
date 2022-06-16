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




 class socios {
    constructor (nombre, edad, aleatorio) {
this.nombre = nombre;
this.edad = edad;
this.numeroDeSocio = aleatorio;
this.anoActual = 2022;
    }
    anoDeNacimiento(){
       return this.anoActual - this.edad;
    }
}


const nuevosSocios = [];

nuevosSocios.push(new socios("Beni", 2, aleatorio()));
nuevosSocios.push(new socios("Oscar", 34, aleatorio()));  
nuevosSocios.push(new socios("Cecilia", 33, aleatorio()));  
nuevosSocios.push(new socios("Mila", 3, aleatorio()));
nuevosSocios.push(new socios("Malena", 18, aleatorio()));
nuevosSocios.push(new socios("Alberto", 65, aleatorio()));
nuevosSocios.push(new socios("Mirna", 54, aleatorio()));
nuevosSocios.push(new socios("Sergio", 4, aleatorio()));



// número aleatorio
function aleatorio(){
    return Math.round (Math.random() * 10000);
  }


  
for (const socio of nuevosSocios) {
    console.log(socio);
    // REVISAR --> debería retornar el índice de cada ingreso pero no, me devuelve en todos el valor 0
    // SOLUCIONADO, el problema era que estaba haciendo el indexOf de nuevosSocios
    const index = nuevosSocios.indexOf(socio);
    imprimirEnPantalla.innerHTML += `<h2>Registro: ${index + 1} - Nombre: ${socio.nombre} / ` + ` Edad: `+ socio.edad + ` / Año nacimiento: ${socio.anoDeNacimiento()} / Número de socio ${socio.numeroDeSocio}<h2> <br> `;
}


console.log(nuevosSocios);
imprimirEnPantalla.innerHTML += `<h1>Cantidad de socios: ${nuevosSocios.length}</h1>`


 // REVISAR --> no consigo que todos los valores estén dentro de un array, sino que me devuelve por cada valor una impresión por pantalla. Por otro lado, según entiendo, debería imprimir por pantalla la variable "menoresEdad y mayoresEdad", pero si hago eso solo me devuelve el primer valor y no todos, como si pasa cuando imprimo "menores" o "mayores"
    const menores = nuevosSocios.filter(socio => socio.edad <= 10)
    console.log(menores)
    
  for (let index = 0; index < menores.length; index++) {
        const menoresEdad = [];
        menoresEdad.push(new socios(menores[index].nombre))
        imprimirEnPantalla.innerHTML += `<h2> Listado de socios menores: ${menores[index].nombre} </h2>`
    }

    const mayores = nuevosSocios.filter(socio => socio.edad > 10)
    console.log(mayores)

    for (let index = 0; index < mayores.length; index++) {
        const mayoresEdad = [];
        mayoresEdad.push(new socios(mayores[index].nombre))
        imprimirEnPantalla.innerHTML += `<h2> Listado de socios mayores: ${mayores[index].nombre} </h2>`
    }