
cargarExistentes()

function cargarExistentes() {
    localStorage.setItem("existentes", JSON.stringify(classroom))
    localStorage.setItem("seleccionado", JSON.stringify(classroom[0]))

    document.getElementById("current-user-img").src = "./profile-pics/" + classroom[0].instructor.imagen

    var ul = document.getElementById("usuarios")
    for (var i = 0; i < classroom.length; i++) {
        var li = document.createElement("li")

        var img = document.createElement("img")
        var imgDir = "./profile-pics/" + classroom[i].instructor.imagen
        img.setAttribute("src", imgDir)

        var nombreUsuario = document.createElement("a")
        nombreUsuario.appendChild(document.createTextNode(classroom[i].instructor.nombre))
        nombreUsuario.classList.add("dropdown-nombre")

        var correoUsuario = document.createElement("a")
        correoUsuario.appendChild(document.createTextNode(classroom[i].instructor.correo))
        correoUsuario.classList.add("dropdown-usuario")

        li.appendChild(img)
        li.appendChild(nombreUsuario)
        li.appendChild(correoUsuario)
        ul.appendChild(li)
    }
    cargarClasesSeleccionado()
}

function cargarClasesSeleccionado() {
    var clasesSel = JSON.parse(localStorage.getItem("seleccionado")).clases


    for (let i = 0; i < clasesSel.length; i++) {
        var img = document.createElement("img")
        img.setAttribute("src", "./images/london.jpg")
        img.classList.add("card-img")

        var medidasCard = document.createElement("div")
        medidasCard.classList.add("col-12", "col-md-6", "col-lg-4")

        var card = document.createElement("div")
        card.classList.add("card")

        var imgOverlay = document.createElement("div")
        imgOverlay.classList.add("card-img-overlay", "text-white")

        var cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(document.createTextNode(clasesSel[i].nombreClase))

        var cardSeccion = document.createElement("p")
        cardSeccion.classList.add("card-text")
        cardSeccion.appendChild(document.createTextNode(clasesSel[i].seccion))

        var cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        cardBody.appendChild(document.createTextNode(clasesSel[i].descripcion))

        var divider = document.createElement("hr")

        medidasCard.appendChild(card)
        card.appendChild(img)
        card.appendChild(imgOverlay)
        imgOverlay.appendChild(cardTitle)
        imgOverlay.appendChild(cardSeccion)
        card.appendChild(cardBody)
        card.appendChild(divider)

        var layout = document.getElementById("clases-layout")
        layout.appendChild(medidasCard)

    }
}


/*<div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <img src="./images/london.jpg" class="card-img" >
                    <div class="card-img-overlay text-white">
                        <h5 class="card-title">Clase</h5>
                        <p class="card-text">Seccion</p>
                    </div>
                    <div class="card-body">
                        aa
                    </div>
                    <hr/>
                    
                </div>
            </div>*/


