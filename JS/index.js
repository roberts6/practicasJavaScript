//prompt + alert
let milanesa = prompt("Milanesa de pollo o carne?")
let acompanamiento = prompt("con pure o con ensalada?")
/*alert("Te invito a comer milanesa de " + milanesa + " con " + acompanamiento + ". Pero la cerveza la pagás vos")*/

switch (milanesa) {
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

//imprimir en el HTML // se usan comillas simples invertidas
let imprimirEnPantalla = document.getElementById("imprimirEnHTML");
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

// while
/*let estadoCivil = prompt("Cómo es tu estado sentimental?")
while (estadoCivil !== "casado" || "casada") {
    switch (estadoCivil) {
        case "soltero":
            imprimirEnPantalla.innerHTML += `divertite querido`
            break;
            case "soltera":
            imprimirEnPantalla.innerHTML += `divertite querida`
            break;
        default:
                imprimirEnPantalla.innerHTML += `andate a tu casa pica flor`
            break;
    }
    alert("ojo...")
}
*/



/*while (amigos) {
    if (amigos % 2 == 0) {
        imprimirEnPantalla.innerHTML += ` Si son ` + amigos + ` da para jugar al truco de a 3`
        break;
    } else{
        imprimirEnPantalla.innerHTML += ` Si son ` + amigos + ` les falta 1 para el truco`
        break;
    }
}*/

switch (amigos % 2) {
    case 0:
        imprimirEnPantalla.innerHTML += ` <h2> Si son ` + amigos + ` da para jugar al truco de a 3 </h2>`
        break;

    default:
            imprimirEnPantalla.innerHTML += ` <h2> Si son ${amigos} les falta 1 para el truco <h2>`
        break;
}


//torneos ganados
let copasInternacionales = 22
let copasNacionales = 16 
let torneosLocales = 34

let torneosBoca = copasInternacionales + copasNacionales + torneosLocales

console.log ("Boca tiene " + torneosBoca + " trofeos entre copas y torneos")