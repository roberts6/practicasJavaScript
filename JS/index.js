//prompt + alert
let milanesa = prompt("Milanesa de pollo o carne?")
let acompanamiento = prompt("con pure o con ensalada?")
alert("Te invito a comer milanesa de " + milanesa + " con " + acompanamiento + ". Pero la cerveza la pagás vos")


let amigos = prompt("Con cuántos/as amigos/as te vas a juntar el finde?")
let cocas = prompt("Cuántos/as toman fernet?")
alert("Si son " + amigos + " vas a tener que comprar " + cocas * 2.4 + " cocas porque se van a quedar cortos/as sino")


//multiplicación
let anos = prompt("Cuántos años tenés?")
let numeroFav = prompt("Tu número favorito del 1 al 10")
let pesos = (anos * numeroFav) / 5
alert("Hoy te vas a encontrar $ " + pesos )

//imprimir en el HTML // se usan comillas simples invertidas
let imprimirEnPantalla = document.getElementById("imprimirEnHTML");
imprimirEnPantalla.innerHTML= `
<h1> Hoy vienen ${amigos} amigos a tu casa </h1>
<h3> pero por favor no te olvides las ${cocas} cocas. Sino la milanesa de ${milanesa} te queda atorada</h3>
`;



//torneos ganados
let copasInternacionales = 22
let copasNacionales = 15 
let torneosLocales = 34

let torneosBoca = copasInternacionales + copasNacionales + torneosLocales

console.log ("Boca tiene " + torneosBoca + " trofeos entre copas y torneos")