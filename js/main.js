(() => {


    //const denunciaBtn = document.getElementById("denuncias");
    const enviarBtn = document.getElementById("enviar");

    const usuariohtml = document.getElementById("usuario");

    const passworhtml = document.getElementById("password");

    const contenedorArticulos = document.querySelector("#contenedor-articulos");
    const articulosDb = [
        {
            img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-31-at-9.44.59-AM-768x507.jpeg',
            title: 'Es Oficial: SIHCAL ya fue publicado en la Gaceta',
            date: 'feb, 1 2024 | Noticias',
            description: 'Roy me puede comer toda la riata'
        },
        {
            img: 'https://www.trabajo.gob.hn/wp-content/uploads/2023/02/SalarioMinimoEvento-6-1-1080x675.jpeg',
            title: '¡Muchos éxitos Ministra Sarahí Cerna!',
            date: ' 30 junio, 2024',
            description: 'en su ascenso a comerme toda la riata'
        },
    ]




    enviarBtn.addEventListener("click", (evento) => {
        if (usuariohtml.value != " " && passworhtml.value != " ") {
            alert("Bienvenido" + usuariohtml.value, + " ingresado");
        }
        else {
            alert("Ingrese los datos requeridos");
        }

    })

    const agregarArticulos = (articulo) => {
        let { img, title, date, description } = articulo;
        contenedorArticulos.innerHTML += `<article>
                <img src="${img}" alt="imagen de la gaceta">
                <h2>${title}</h2>
                <p>${date}</p>
                <p>${description}</p>
            </article>`
    }

    articulosDb.map((articulo) => {

        agregarArticulos(articulo);
    })

})();

/*    let objeto = {
       nombre: "CARLOS",
       email: "czelaya@trabajo.gob.hn",
       saludar: (saludo) => {
           console.log("Hola" + saludo);
       }
   }

   console.log(objeto);
   console.log(objeto.saludar("micho")) */