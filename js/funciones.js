
cargarExistentes()

function cargarExistentes() {
    localStorage.setItem("existentes", JSON.stringify(classroom))
    localStorage.setItem("seleccionado", JSON.stringify(classroom[0]))

    document.getElementById("current-user-img").src = "./profile-pics/" + classroom[0].instructor.imagen

    var ul = document.getElementById("usuarios")

    //users
    for (var i = 0; i < classroom.length; i++) {
        var li = document.createElement("li")
        li.classList.add("dropdown-item")

        li.onclick = function (arg) {
            return function () {
                recargarUsuario(arg)
            }
        }(i);

        var img = document.createElement("img")
        var imgDir = "./profile-pics/" + classroom[i].instructor.imagen
        img.setAttribute("src", imgDir)
        img.classList.add("avatar")

        var container = document.createElement("div")
        container.classList.add("container")

        var parentRow = document.createElement("div")
        parentRow.classList.add("row")

        var imgCol = document.createElement("div")
        imgCol.classList.add("col-2")

        var txtCol = document.createElement("div")
        txtCol.classList.add("col-4")

        var childRow1 = document.createElement("div")
        childRow1.classList.add("row")
        var childRow2 = document.createElement("div")
        childRow2.classList.add("row")

        var nombreUsuario = document.createElement("h5")
        nombreUsuario.appendChild(document.createTextNode(classroom[i].instructor.nombre))
        nombreUsuario.classList.add("dropdown-nombreUsuario")

        var correoUsuario = document.createElement("p")
        correoUsuario.appendChild(document.createTextNode(classroom[i].instructor.correo))
        correoUsuario.classList.add("dropdown-correoUsuario")


        container.appendChild(parentRow)
        parentRow.appendChild(imgCol)
        imgCol.appendChild(img)
        parentRow.appendChild(txtCol)
        txtCol.appendChild(childRow1)
        txtCol.appendChild(childRow2)
        childRow1.appendChild(nombreUsuario)
        childRow2.appendChild(correoUsuario)

        li.appendChild(container)
        ul.appendChild(li)
    }
    //añadir instructor
    var li = document.createElement("li")
    li.classList.add("dropdown-item")


    var img = document.createElement("img")
    img.setAttribute("src", "./images/user-plus-solid.svg")
    img.classList.add("avatar")

    var container = document.createElement("div")
    container.classList.add("container")

    var parentRow = document.createElement("div")
    parentRow.classList.add("row")

    var imgCol = document.createElement("div")
    imgCol.classList.add("col-2")

    var txtCol = document.createElement("div")
    txtCol.classList.add("col-4")

    var childRow1 = document.createElement("div")
    childRow1.classList.add("row")
    var childRow2 = document.createElement("div")
    childRow2.classList.add("row")

    var nombreUsuario = document.createElement("h5")
    nombreUsuario.appendChild(document.createTextNode("Agregar Instructor"))
    nombreUsuario.classList.add("dropdown-nombreUsuario")

    var correoUsuario = document.createElement("p")
    correoUsuario.appendChild(document.createTextNode(""))
    correoUsuario.classList.add("dropdown-correoUsuario")


    container.appendChild(parentRow)
    parentRow.appendChild(imgCol)
    imgCol.appendChild(img)
    parentRow.appendChild(txtCol)
    txtCol.appendChild(childRow1)
    txtCol.appendChild(childRow2)
    childRow1.appendChild(nombreUsuario)
    childRow2.appendChild(correoUsuario)

    li.appendChild(container)
    ul.appendChild(li)

    //policies
    var liPolicies = document.createElement("li")


    var containerPolicies = document.createElement("div")
    containerPolicies.classList.add("container", "smallerContainer")

    var pPolicies = document.createElement("small")
    pPolicies.classList.add("policies")
    pPolicies.appendChild(document.createTextNode("Privacy Policy     •     Terms of Service"))

    containerPolicies.appendChild(pPolicies)
    liPolicies.appendChild(containerPolicies)
    ul.appendChild(liPolicies)

    cargarClasesSeleccionado()
}

function recargarUsuario(usuarioSel) {
    localStorage.setItem("seleccionado", JSON.stringify(classroom[usuarioSel]))

    document.getElementById("current-user-img").src = "./profile-pics/" + classroom[usuarioSel].instructor.imagen
    cargarClasesSeleccionado()
}

function cargarClasesSeleccionado() {
    var clasesSel = JSON.parse(localStorage.getItem("seleccionado")).clases
    var layout = document.getElementById("clases-layout")
    layout.replaceChildren()

    for (let i = 0; i < clasesSel.length; i++) {
        var img = document.createElement("img")
        img.setAttribute("src", "./images/london.jpg")
        img.classList.add("card-img")

        var medidasCard = document.createElement("div")
        medidasCard.classList.add("col-12", "col-md-6", "col-lg-3")

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

        var cardText = document.createElement("p")
        cardText.appendChild(document.createTextNode(clasesSel[i].descripcion))

        cardBody.appendChild(cardText)

        var icons = document.createElement("div")
        icons.classList.add("d-flex", "flex-row-reverse", "card-footer", "bg-transparent")


        var arrow = document.createElement("i")
        arrow.classList.add("p-2", "fa-solid", "fa-arrow-trend-up", "float-left", "class-icon")

        var folder = document.createElement("i")
        folder.classList.add("p-2", "fa-regular", "fa-folder", "float-left", "class-icon")


        medidasCard.appendChild(card)
        card.appendChild(img)
        card.appendChild(imgOverlay)
        imgOverlay.appendChild(cardTitle)
        imgOverlay.appendChild(cardSeccion)
        card.appendChild(cardBody)

        icons.appendChild(folder)
        icons.appendChild(arrow)
        card.appendChild(icons)
        layout.appendChild(medidasCard)

    }
}

function addClase() {
    var datos = document.getElementById("formClase")

    var nombreAsignatura = datos[0].value
    var seccionAsignatura = datos[1].value
    var codigoAsignatura = datos[2].value
    var descripcionAsignatura = datos[3].value

    var usuarioSel = JSON.parse(localStorage.getItem("seleccionado"))
    usuarioSel.clases.push({
        nombreClase: nombreAsignatura,
        codigo: codigoAsignatura,
        seccion: seccionAsignatura,
        descripcion: descripcionAsignatura
    })

    localStorage.setItem("seleccionado", JSON.stringify(usuarioSel))

    for (let i = 0; i < classroom.length; i++) {
        let nombre1 = classroom[i].instructor.nombre
        let nombre2 = usuarioSel.instructor.nombre
        let result = nombre1.localeCompare(nombre2)
        if (result == 0) {

            classroom[i].clases.push({
                nombreClase: nombreAsignatura,
                codigo: codigoAsignatura,
                seccion: seccionAsignatura,
                descripcion: descripcionAsignatura
            })
            cargarClasesSeleccionado()
            break
        }

    }
    localStorage.setItem("existentes", JSON.stringify(classroom))
    alert("Clase creada con exitosamente.")
    document.getElementById("nombreAsignatura").value = ""
    document.getElementById("seccionAsignatura").value = ""
    document.getElementById("codigoAsignatura").value = ""
    document.getElementById("descripcionAsignatura").value = ""
}




