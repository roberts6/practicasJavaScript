const fechaHoy = new Date();

// clase que construye socio con su información
class Socio {
    constructor (nombre,apellido, fechaNac, direccion, piso, CP, telefono, mail) {
this.nombre = nombre;
this.apellido = apellido;
this.fechaNac = fechaNac;
this.edad = this.calcularEdad();

this.estado = (this.edad > 10) ? "Mayor" : "Menor" // --> operador ternario. Evalua una condición y retorna, en este caso, 2 posibles respuestas
this.numeroDeSocio = Math.round (Math.random() * 10000);;
this.direccion = direccion;
this.piso = piso;
this.CP = CP;
this.telefono = telefono;
this.mail = mail;
    }
    SocioID (){
        return this.numeroDeSocio * 2;
    }
    calcularEdad(){
      const fechaActual = new Date();
      const anoActual = parseInt(fechaActual.getFullYear());
      const mesActual = parseInt(fechaActual.getMonth());
      const diaActual = parseInt(fechaActual.getDay());
  
      const anoNacimientoSocio = parseInt(String(this.fechaNac).substring(0,4));
      const mesNacimientoSocio = parseInt(String(this.fechaNac).substring(5,7));
      const diaNacimientoSocio = parseInt(String(this.fechaNac).substring(8,10)); 

      let edadActual = anoActual - anoNacimientoSocio
      if (mesActual < mesNacimientoSocio) {
        edadActual--;
      }else if (mesActual === mesNacimientoSocio) {
        if (diaActual < diaNacimientoSocio) {
          edadActual--;
        }
      }
      return edadActual;
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
        //console.log("Total de socios:",this.listaNuevosSocios);
        
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
            const edad = socio.edad

            // crea un div por cada elemento
            const elememto = document.createElement("div")
            // le voy a asignar un id y una clase a cada socio. Como valor va a tomar su numero de socio
            elememto.id = Nsocio
            elememto.className = "socio"
            elememto.innerHTML = `
            <div class= "nombreSocio">Nombre: ${nombre}</div>
            <div class= "nombreSocio">Apellido: ${apellido}</div>
            <div class= "edadSocio">Edad: ${edad}</div>
            <div class= "edadSocio">Abono: ${socio.estado}</div>
            <div class= "edadSocio">Año de nacimiento: ${socio.fechaNac}</div>
            <div class= "edadSocio">Nº de socio: ${Nsocio}</div>
            `  

            // creo botón para borrar
        const botonBorrar = document.createElement("button")
        botonBorrar.textContent = "Borrar"
        // acción del botón
        botonBorrar.onclick = () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: '¿Estás seguro que querés eliminar a ' + socio.nombre + '?',
                text: "Esta acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'No, cancelar!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'HECHO!',
                    'El socio ha sido eliminado.',
                    'success'
                  )
                  this.borrarSocio(socio)
                this.borrarSocioHTML(socio)
                this.menoresEdad(socio)
                this.mayoresEdad(socio)
                this.LogArray()
                this.creaJson()
                this.muestraJson()
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'No ha habido cambios',
                    'error'
                  )
                }
              })
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
            <div class= "edadSocio">Abono: ${socio?.estado}</div>
            <div class= "edadSocio">Año de nacimiento: ${socio?.fechaNac}</div>
            <div class= "edadSocio">Nº de socio: ${socio?.numeroDeSocio}</div>
            `
            const botonBorrar = document.createElement("button")
            botonBorrar.textContent = "Borrar"

            botonBorrar.onclick = () => {
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                      confirmButton: 'btn btn-success',
                      cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                  })
                  
                  swalWithBootstrapButtons.fire({
                    title: '¿Estás seguro que querés eliminar a ' + socio.nombre + '?',
                    text: "Esta acción no se puede revertir!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Si, eliminar!',
                    cancelButtonText: 'No, cancelar!',
                    reverseButtons: true
                  }).then((result) => {
                    if (result.isConfirmed) {
                      swalWithBootstrapButtons.fire(
                        'HECHO!',
                        'El socio ha sido eliminado.',
                        'success'
                      )
                      this.borrarSocio(socio)
                      this.borrarSocioHTML(socio)
                      localStorage.removeItem(socio)
                      this.LogArray()
                      this.menoresEdad(socio)
                      this.mayoresEdad(socio)
                      this.creaJson()
                      this.muestraJson()
                    } else if (
                      /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      swalWithBootstrapButtons.fire(
                        'Cancelado',
                        'No ha habido cambios',
                        'error'
                      )
                    }
                  })
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
            //console.log("En el localStorage hay guardados:",JSON.parse(storage));
        } 
    }
    menoresEdad(socio){
        const menores = this.listaNuevosSocios.filter(socio => socio.edad <= 10)
        //console.log("Estos son los socios menores de edad:",menores)
    const menoresEdad = [];
  for (let index = 0; index < menores.length; index++) {
        menoresEdad.push(menores[index].nombre)
    }
    let listaMenores = menoresEdad.toString(" ");
}
    mayoresEdad(socio){
        const mayores = this.listaNuevosSocios.filter(socio => socio.edad > 10)
    //console.log("Estos son los socios mayores de edad:",mayores)

    const mayoresEdad = [];
    for (let index = 0; index < mayores.length; index++) {
        mayoresEdad.push(mayores[index].nombre)   
    }
    let listaMayores = mayoresEdad.toString(" ");
    }
    diaYhora(){
      let contenedorFecha = document.getElementById("fecha")
        const elememtoFecha = document.createElement("div")
        elememtoFecha.className = "horaYfecha"
        const DateTime = luxon.DateTime
      const intervalo = setInterval(() => { // --> este intervalo hace que cada 1'' se ejecute la const now, resfrescado el reloj
       const now = DateTime.now();
        elememtoFecha.innerHTML = `
            ${now.day} / ${now.month} / ${now.year}
            ${now.hour}:${now.minute}
            `
            contenedorFecha.append(elememtoFecha)
          }, 1000);
        } 
    fetchStorage(socio){
      fetch('/storage.json').then((response) => response.json())
      .then((resultado) => {
        //console.log("Esto trae el JSON ",resultado);

        let nombre = resultado.nombre
        let apellido = resultado.apellido
        let fechaNac = resultado.fechaNac
        let direccion = resultado.direccion
        let piso = resultado.piso
        let CP = resultado.CP
        let telefono = resultado.telefono
        let mail = resultado.mail
        let socio = new Socio (nombre,apellido,parseInt(fechaNac),direccion,piso,CP,telefono,mail)
        
        this.agregarSocio(socio)
        this.creaJson()
        this.mayoresEdad(socio)
        this.menoresEdad(socio)
        this.muestraJson()

        //console.log("ahora así está el array", this.listaNuevosSocios);
        let contenedor = document.getElementById("contenedor")
        const elememto = document.createElement("div")
        elememto.id = socio?.numeroDeSocio
        elememto.className = "socio"
        elememto.innerHTML = `
        <div class= "nombreSocio">Nombre: ${socio?.nombre}</div>
        <div class= "nombreSocio">Apellido: ${socio?.apellido}</div>
        <div class= "edadSocio">Edad: ${socio?.edad}</div>
        <div class= "edadSocio">Abono: ${socio?.estado}</div>
        <div class= "edadSocio">Año de nacimiento: ${socio?.fechaNac}</div>
        <div class= "edadSocio">Nº de socio: ${socio?.numeroDeSocio}</div>
        `
        const botonBorrar = document.createElement("button")
        botonBorrar.textContent = "Borrar"

        botonBorrar.onclick = () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: '¿Estás seguro que querés eliminar a ' + socio.nombre + '?',
                text: "Esta acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'No, cancelar!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'HECHO!',
                    'El socio ha sido eliminado.',
                    'success'
                  )
                  this.borrarSocio(socio)
                  this.borrarSocioHTML(socio)
                  localStorage.removeItem(socio)
                  this.LogArray()
                  this.menoresEdad(socio)
                  this.mayoresEdad(socio)
                  this.creaJson()
                  this.muestraJson()
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'No ha habido cambios',
                    'error'
                  )
                }
              })
        }
         
            elememto.append(botonBorrar)
            contenedor.append(elememto)
        }).catch((error) => {console.log(error)
        })
    }
    fetchAPI()
    {
      fetch('https://swapi.dev/api/people').then((response) => response.json())
        .then((resultado) => {
          //console.log("Esto trae el JSON del API ",resultado.results[0].name);
          
          for (let i = 0; i < resultado.results.length; i++) {
      
        let nombre = resultado.results[i].name
        let apellido = resultado.results[i].skin_color
        let fechaNac = "1987/12/26"
        let direccion = document.querySelector("#validationDireccion").value
        let CP = document.querySelector("#validationCP").value
        let piso = document.querySelector("#validationPiso").value
        let mail = document.querySelector("#validationMail").value
        let telefono = document.querySelector("#validationTelefono").value
        let socio = new Socio (nombre,apellido,parseInt(fechaNac),direccion,piso,CP,telefono,mail)
        
        SOCIOS.agregarSocio(socio)
        
          let contenedor = document.getElementById("contenedor")
          const elememto = document.createElement("div")
          elememto.id = socio?.numeroDeSocio
          elememto.className = "socio"
          elememto.innerHTML = `
          <div class= "nombreSocio">Nombre: ${socio?.nombre}</div>
          <div class= "nombreSocio">Apellido: ${socio?.apellido}</div>
          <div class= "edadSocio">Edad: ${socio?.edad}</div>
          <div class= "edadSocio">Abono: ${socio?.estado}</div>
          <div class= "edadSocio">Año de nacimiento: ${socio?.fechaNac}</div>
          <div class= "edadSocio">Nº de socio: ${socio?.numeroDeSocio}</div>
          `
          const botonBorrar = document.createElement("button")
          botonBorrar.textContent = "Borrar"
          botonBorrar.onclick = () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: '¿Estás seguro que querés eliminar a ' + socio.nombre + '?',
                text: "Esta acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'No, cancelar!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'HECHO!',
                    'El socio ha sido eliminado.',
                    'success'
                  )
                  this.borrarSocio(socio)
                  this.borrarSocioHTML(socio)
                  localStorage.removeItem(socio)
                  this.LogArray()
                  this.menoresEdad(socio)
                  this.mayoresEdad(socio)
                  this.creaJson()
                  this.muestraJson()
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'No ha habido cambios',
                    'error'
                  )
                }
              })
        }
         
            elememto.append(botonBorrar)
            contenedor.append(elememto)
        }
        //console.log("ahora así está el array", this.listaNuevosSocios);
        }).catch((error) => {console.log(error)
      })
    }
}


// inicia el array "nuevosSocios" en 0
const SOCIOS = new Socios()


// Ingreso de socios de forma estática
const socioEstatico1 = new Socio("Beni","Roberts",parseInt("2020/6/5"));
const socioEstatico2 = new Socio("Oscar","Roberts", parseInt("1987/12/26"));  
const socioEstatico3 = new Socio("Cecilia","Olguin", parseInt("1988/4/8"));  
const socioEstatico4 = new Socio("Mila","Roberts", parseInt("2019/2/3"));


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
SOCIOS.diaYhora()
SOCIOS.fetchStorage()
SOCIOS.fetchAPI()


const inputs = document.querySelectorAll(`#formulario input`)
let expresiones = /^[a-zA-ZÀ-ÿ\s]{1,40}$/i;

const validarForm = (e) => {
  switch (e.target.value) {
   case "nombre":
      if (expresiones.test(e.target.value)) {
        document.getElementById("validationDefaultNombre").classList.remove("incorrecto")
      }else{
          document.getElementById("validationDefaultNombre").classList.add("incorrecto")
      }
      break;
     case "apellido":
      if (expresiones.test(e.target.value)) {
        document.getElementById("validationDefaultNombre").classList.remove("incorrecto")
      }else{
        document.getElementById("validationDefaultNombre").classList.add("incorrecto")
      }
     break;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarForm);
   
  input.addEventListener('blur', validarForm)
  });

// toma datos del formulario y construye un socio nuevo
const submitFormulario = async (ID) => {
  try {
    let form = await document.getElementById(ID);
    form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Usuario agregado',
      showConfirmButton: false,
      timer: 1500
    })
    let nombre = document.querySelector("#validationDefaultNombre").value
    let apellido = document.querySelector("#validationDefaultApellido").value
    let fechaNac = document.querySelector("#validationDefaultFechaNac").value
    let direccion = document.querySelector("#validationDireccion").value
    let piso = document.querySelector("#validationPiso").value
    let CP = document.querySelector("#validationCP").value
    let telefono = document.querySelector("#validationTelefono").value
    //funciona pero no quiero un alert -->
     telefono.length < 10 ? alert("El número debe ser igual o mayor a 10 dígitos") : telefono.value
    // no me funciona agregando color desde JS --> telefono.length < 10 ? telefono.style.backgroundColor = 'red' : telefono.value
    let mail = document.querySelector("#validationMail").value
    
    //console.log("nació en: ",fechaNac);

    let socio = new Socio (nombre,apellido,parseInt(fechaNac),direccion,piso,CP,telefono,mail)
    SOCIOS.agregarSocio(socio)
    //console.log(socio);
    SOCIOS.mostrarUltimoSocio(socio)
    SOCIOS.menoresEdad(socio)
    SOCIOS.mayoresEdad(socio)
    SOCIOS.LogArray()
    SOCIOS.creaJson()
    SOCIOS.muestraJson()
})
  } catch (error) {
    console.log("Error en el submit: ",error); 
  }
    }

// invocación para que el formulario tome los datos ingresados
submitFormulario("formulario")





