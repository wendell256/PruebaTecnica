
cargarExistentes()

function cargarExistentes() {
    localStorage.setItem("existentes", JSON.stringify(classroom))
    localStorage.setItem("seleccionado", JSON.stringify(classroom[0]))

    document.getElementById("current-user-img").src="./profile-pics/" + classroom[0].instructor.imagen

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
}

