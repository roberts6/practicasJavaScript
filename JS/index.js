const ano = new Date();

// clase que construye socio con su información
class Socio {
    constructor (nombre, edad) {
this.nombre = nombre;
this.edad = edad;
this.numeroDeSocio = Math.round (Math.random() * 10000);;
this.anoActual = ano.getFullYear();
    }
    anoDeNacimiento(){
       return this.anoActual - this.edad;
    }
    SocioID (){
        return this.numeroDeSocio * 2;
    }
}


// clase que ejecuta acciones sobre el socio
class Socios{
    constructor(){
        this.listaNuevosSocios = []
    }
    agregarSocio(socio){
        this.listaNuevosSocios.push(socio)
    }
    borrarSocio (socio){
        this.listaNuevosSocios = this.listaNuevosSocios.filter((value) => {
            return value.numeroDeSocio !== socio.numeroDeSocio
        })
    }
    borrarSocioHTML(socio){
        let elememto = document.getElementById(socio.numeroDeSocio)
        elememto.remove()
    }
    generadorID(){
        (this.listaNuevosSocios.length) + 1
    }
    LogArray(){
        console.log(this.listaNuevosSocios);
        
    }
    mostrarEnHTML(){
        // primero obtengo el contenedor donde quiero imprimir
        let contenedor = document.getElementById("contenedor")
        for (let index = 0; index < this.listaNuevosSocios.length; index++) {
            // itera cada socio dentro de mi array
            const socio = this.listaNuevosSocios[index];
            // crea un div por cada elemento
            const elememto = document.createElement("div")
            // le voy a asignar un id y una clase a cada socio. Como valor va a tomar su numero de socio
            elememto.id = socio.numeroDeSocio
            elememto.className = "socio"
            elememto.innerHTML = `
            <div class= "nombreSocio">${socio.nombre}</div>
            <div class= "edadSocio">${socio.edad}</div>
            `
            // creo botón para borrar
            const botonBorrar = document.createElement("button")
            botonBorrar.textContent = "Borrar"
            // acción del botón
            botonBorrar.onclick = () => {
                this.borrarSocio(socio)
                this.borrarSocioHTML(socio)
                this.LogArray()
            }
            // agrego el botón creado a mi elemento
            elememto.append(botonBorrar)
            // agrego el elemento creado a mi contenedor
            contenedor.append(elememto)
        }
    }
    mostrarUltimoSocio (socio){
        let contenedor = document.getElementById("contenedor")
            const elememto = document.createElement("div")
            elememto.id = socio.numeroDeSocio
            elememto.className = "socio"
            elememto.innerHTML = `
            <div class= "nombreSocio">${socio.nombre}</div>
            <div class= "edadSocio">${socio.edad}</div>
            `
            const botonBorrar = document.createElement("button")
            botonBorrar.textContent = "Borrar"

            botonBorrar.onclick = () => {
                this.borrarSocio(socio)
                this.borrarSocioHTML(socio)
                this.LogArray()
            }
         
            elememto.append(botonBorrar)
            contenedor.append(elememto)
    }

}


// inicia el array "nuevosSocios" en 0
const SOCIOS = new Socios()


// Ingreso de socios de forma estática
const socioEstatico1 = new Socio("Beni", 2);
const socioEstatico2 = new Socio("Oscar", 34);  
const socioEstatico3 = new Socio("Cecilia", 33);  
const socioEstatico4 = new Socio("Mila", 3);


SOCIOS.agregarSocio(socioEstatico1)
SOCIOS.agregarSocio(socioEstatico2)
SOCIOS.agregarSocio(socioEstatico3)
SOCIOS.agregarSocio(socioEstatico4)

SOCIOS.LogArray()
SOCIOS.mostrarEnHTML()
SOCIOS.mostrarUltimoSocio()
SOCIOS.borrarSocioHTML()





// toma datos del formulario y construye un socio nuevo
const submitFormulario = (ID) => {
    let form = document.getElementById(ID);
    form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    let nombre = form.children[0].value
    let edad = form.children[1].value
    let socio = new Socio (nombre,parseInt(edad))
    SOCIOS.agregarSocio(socio)
    console.log(socio);
    SOCIOS.mostrarUltimoSocio(socio)
    SOCIOS.LogArray()
})}

// invocación para que el formulario tome los datos ingresados
submitFormulario("formulario")





