const ano = new Date();

// clase que construye socio con su información
class Socio {
    constructor (nombre,apellido, edad) {
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.estado = (edad > 10) ? "Mayor" : "Menor" // --> operador ternario. Evalua una condición y retorna, en este caso, 2 posibles respuestas
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
        let elememto = document.getElementById(socio?.numeroDeSocio)
        elememto.remove()
    }
    generadorID(){
        (this.listaNuevosSocios.length) + 1
    }
    LogArray(){
        console.log("Total de socios:",this.listaNuevosSocios);
        
    }
    mostrarEnHTML(){
        // primero obtengo el contenedor donde quiero imprimir
        let contenedor = document.getElementById("contenedor")
        for (let index = 0; index < this.listaNuevosSocios.length; index++) {
            // itera cada socio dentro de mi array
            const socio = this.listaNuevosSocios[index];

// Desestructuraciones
            const Nsocio = socio.numeroDeSocio
            const nombre = socio.nombre 
            const apellido = socio.apellido 

            // crea un div por cada elemento
            const elememto = document.createElement("div")
            // le voy a asignar un id y una clase a cada socio. Como valor va a tomar su numero de socio
            elememto.id = Nsocio
            elememto.className = "socio"
            elememto.innerHTML = `
            <div class= "nombreSocio">Nombre: ${nombre}</div>
            <div class= "nombreSocio">Apellido: ${apellido}</div>
            <div class= "edadSocio">Edad: ${socio.edad}</div>
            <div class= "edadSocio">Año de nacimiento: ${socio.anoDeNacimiento()}</div>
            <div class= "edadSocio">Nº de socio: ${socio.numeroDeSocio}</div>
            `  

            // creo botón para borrar
        const botonBorrar = document.createElement("button")
        botonBorrar.textContent = "Borrar"
        // acción del botón
        botonBorrar.onclick = () => {
            this.borrarSocio(socio)
            this.borrarSocioHTML(socio)
            localStorage.removeItem(socio)
            this.LogArray()
            this.menoresEdad(socio)
            this.mayoresEdad(socio)
            this.creaJson()
            this.muestraJson()
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
            elememto.id = socio?.numeroDeSocio
            elememto.className = "socio"
            elememto.innerHTML = `
            <div class= "nombreSocio">Nombre: ${socio?.nombre}</div>
            <div class= "nombreSocio">Apellido: ${socio?.apellido}</div>
            <div class= "edadSocio">Edad: ${socio?.edad}</div>
            <div class= "edadSocio">Año de nacimiento: ${socio?.anoDeNacimiento()}</div>
            <div class= "edadSocio">Nº de socio: ${socio?.numeroDeSocio}</div>
            `
            const botonBorrar = document.createElement("button")
            botonBorrar.textContent = "Borrar"

            botonBorrar.onclick = () => {
                this.borrarSocio(socio)
                this.borrarSocioHTML(socio)
                this.menoresEdad(socio)
                this.mayoresEdad(socio)
                this.LogArray()
                this.creaJson()
                this.muestraJson()
            }
         
            elememto.append(botonBorrar)
            contenedor.append(elememto)
    }
    creaJson(){
    localStorage.setItem("listadoSocios", JSON.stringify(this.listaNuevosSocios))
    }
    muestraJson(){
       let storage = localStorage.getItem("listadoSocios")
        for (let index = 0; index < localStorage.length; index++) {
            const listaJson = localStorage.key(index);
            console.log("En el localStorage hay guardados:",JSON.parse(storage));
        } 
        /* const guardadosEnJson = JSON.parse(localStorage.getItem("listadoSocios"))
        this.listaNuevosSocios = []
        for (const socio of guardadosEnJson) {
            this.listaNuevosSocios.push(new Socio(socio))
            console.log(this.listaNuevosSocios);  
        }*/
    }
    menoresEdad(socio){
        const menores = this.listaNuevosSocios.filter(socio => socio.edad <= 10)
        console.log("Estos son los socios menores de edad:",menores)
    const menoresEdad = [];
  for (let index = 0; index < menores.length; index++) {
        menoresEdad.push(menores[index].nombre)
    }
    let listaMenores = menoresEdad.toString(" ");
}
    mayoresEdad(socio){
        const mayores = this.listaNuevosSocios.filter(socio => socio.edad > 10)
    console.log("Estos son los socios mayores de edad:",mayores)

    const mayoresEdad = [];
    for (let index = 0; index < mayores.length; index++) {
        mayoresEdad.push(mayores[index].nombre)   
    }
    let listaMayores = mayoresEdad.toString(" ");
    }
}


// inicia el array "nuevosSocios" en 0
const SOCIOS = new Socios()


// Ingreso de socios de forma estática
const socioEstatico1 = new Socio("Beni","Roberts", 2);
const socioEstatico2 = new Socio("Oscar","Roberts", 34);  
const socioEstatico3 = new Socio("Cecilia","Olguin", 33);  
const socioEstatico4 = new Socio("Mila","Roberts", 3);


SOCIOS.agregarSocio(socioEstatico1)
SOCIOS.agregarSocio(socioEstatico2)
SOCIOS.agregarSocio(socioEstatico3)
SOCIOS.agregarSocio(socioEstatico4)

SOCIOS.LogArray()
SOCIOS.mostrarEnHTML()
SOCIOS.mostrarUltimoSocio()
SOCIOS.borrarSocioHTML()
SOCIOS.menoresEdad()
SOCIOS.mayoresEdad()
SOCIOS.creaJson()
SOCIOS.muestraJson()


// toma datos del formulario y construye un socio nuevo
const submitFormulario = (ID) => {
    let form = document.getElementById(ID);
    form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    let nombre = form.children[0].value
    let apellido = form.children[1].value
    let edad = form.children[2].value
    let socio = new Socio (nombre,apellido,parseInt(edad))
    SOCIOS.agregarSocio(socio)
    console.log(socio);
    SOCIOS.mostrarUltimoSocio(socio)
    SOCIOS.menoresEdad(socio)
    SOCIOS.mayoresEdad(socio)
    SOCIOS.LogArray()
    SOCIOS.creaJson()
    SOCIOS.muestraJson()
})}

// invocación para que el formulario tome los datos ingresados
submitFormulario("formulario")





