class Socio {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}
class Socios {
    constructor() {
        this.nuevosSocios = []
    }
    agregarSocio(socio) {
        this.nuevosSocios.push(socio)
    }
    removerSocio(socio) {
        this.nuevosSocios = this.nuevosSocios.filter((value) => {
            return value.nombre !== socio.nombre
        })
    }
    removerSocioHtml(socio) {
        let elemento = document.getElementById(socio.nombre)
        elemento.remove()
    }
    calculateTotalPrice() {
        let total = 0;
        this.lista.map((value) => {
            total = total + parseInt(value.edad)
        })
        return total;
    }
    logLista() {
        console.log(this.nuevosSocios);
    }
    renderHtml() {
        let contenedor = document.getElementById('listadoYdatos')
        for (let index = 0; index < this.nuevosSocios.length; index++) {
            const socio = this.nuevosSocios[index];
            const elemento = document.createElement('div')
            elemento.id = socio.nombre;
            elemento.className = "socio";
            elemento.innerHTML = `
                <div class="nombre">${socio.nombre}</div>
                <div class="edad">${socio.edad}</div>
            `
            const button = document.createElement('button')
            button.textContent = "Eliminar"
            button.onclick = () => {
                this.removerSocio(socio)
                this.removerSocioHtml(socio)
                this.logLista();
            }
            elemento.append(button)
            contenedor.append(elemento)
        }
       // this.showPrecioHtml();
    }
    agregarSocioHtml(socio) {
        let contenedor = document.getElementById('listadoYdatos')
        const elemento = document.createElement('div')
        elemento.className = "socio"
        elemento.id = socio.nombre
        elemento.innerHTML = `
            <div class="nombre">${socio.nombre}</div>
            <div class="edad">${socio.edad}</div>
        `
        const button = document.createElement('button')
        button.textContent = "Eliminar"
        button.onclick = () => {
            this.removerSocio(socio)
            this.removerSocioHtml(socio)
            this.logLista();
        }
        elemento.append(button)
        contenedor.append(elemento)
        this.showEdadHtml();
    }
}
const Datos = new Socios()

const p1 = new Socio('Mirko', 30)
const p2 = new Socio('Asusena', 40)
const p3 = new Socio('Felipe', 50)
const p4 = new Socio('Herminda', 100)

Datos.agregarSocio(p1)
Datos.agregarSocio(p2)
Datos.agregarSocio(p3)
Datos.agregarSocio(p4)

Datos.renderHtml()
Datos.logLista()



const submitFormulario = (ID) => {
    let form = document.getElementById(ID);
        form.addEventListener(`submit`, (event) => {
        event.preventDefault();
        let nombre = form.children[0].value
        let edad = form.children[1].value
        let ultimoSocio = new socio(nombre,parseInt(edad));
        nuevosSocios.push(ultimoSocio);
        Datos.agregarSocio(nuevosSocio)
        Datos.agregarSocioHtml(nuevosSocio)
        Datos.logLista()
    })
}
submitFormulario('formulario')
