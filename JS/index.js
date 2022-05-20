//prompt + alert
let milanesa = prompt("Milanesa de pollo o carne?")
let acompanamiento = prompt("con pure o con ensalada?")
alert("Te invito a comer milanesa de " + milanesa + " con " + acompanamiento + ". Pero la cerveza la pagás vos")


let amigos = prompt("Con cuántos/as amigos/as te vas a juntar el finde?")
let cocas = prompt("Cuántos/as toman fernet?")
let cantidadCocas = cocas * 2
alert("Si son " + amigos + " vas a tener que comprar " + cantidadCocas + " cocas porque se van a quedar cortos/as sino")


//multiplicación
let anos = prompt("Cuántos años tenés?")
let numeroFav = prompt("Tu número favorito del 1 al 10")
let pesos = (anos * numeroFav) / 4
alert("Hoy te vas a encontrar $ " + pesos )

//imprimir en el HTML // se usan comillas simples invertidas
let imprimirEnPantalla = document.getElementById("imprimirEnHTML");
imprimirEnPantalla.innerHTML= `
<h1> Hoy vienen ${amigos} amigos a tu casa </h1>
<h3> pero por favor no te olvides las ${cantidadCocas} cocas. Sino la milanesa de ${milanesa} te queda atorada</h3>
`;

//condicional --> el + antes del = concatena con el mensaje anterior
if (amigos >= 6){
    imprimirEnPantalla.innerHTML += `uufff ` + amigos + ` ...Son muchos. Linda juntada.`;
}else {
    imprimirEnPantalla.innerHTML += `Algo íntimo, me gusta`;
}

// Ciclo
for(let i = 1; i <= amigos; i++ ){
    imprimirEnPantalla.innerHTML += ` El amigo` + ` ` + i + ` `;
}



//torneos ganados
let copasInternacionales = 22
let copasNacionales = 15 
let torneosLocales = 34

let torneosBoca = copasInternacionales + copasNacionales + torneosLocales

console.log ("Boca tiene " + torneosBoca + " trofeos entre copas y torneos")