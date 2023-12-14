const accesKey = "Gh678MN-9XmTzvMbbqCrc2Mxm5ViwkrTATbySLvpU1E";

const input_consulta = document.getElementById("input_consulta")
const btn_consulta = document.getElementById("btn_consulta") 
const div_img = document.getElementById("div_img")

const recargar = document.getElementById("recargar")

let consulta;

let imagen_buscar;

let fragmentImagenes = document.createDocumentFragment();

const mostrarImágenes = () => {

    consulta = input_consulta.value;

    fetch("https://api.unsplash.com/search/photos?query="+consulta+"&client_id="+accesKey)
    .then(response => response.json())
    .then(response => {

    // console.log(response.results)

    let resuesta = response.results

    /*
     Mostrar los resultados de la consulta.
     Muestro las urls completas que me da la consulta.
    */
    resuesta.forEach(imagen => {
        // console.log(imagen.urls.full)

        btn_consulta.classList.add("ocultar")

        imagen_buscar = document.createElement("IMG")
        imagen_buscar.src = imagen.urls.full
        imagen_buscar.classList.add("img")

        fragmentImagenes.appendChild(imagen_buscar)

    });
    
    div_img.appendChild(fragmentImagenes)

})

}

const recargarPagina = () => {

    window.location.reload();

}


btn_consulta.addEventListener("click", mostrarImágenes)
recargar.addEventListener("click", recargarPagina)