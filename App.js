document.addEventListener("DOMContentLoaded",event =>{
    const formAlumnos = document.querySelector("#frmAlumno");
    formAlumnos.addEventListener("submit",(e)=>{
        e.preventDefault();

        let Codigo = document.querySelector("#txtCodigoAlumno").value,
        nombre = document.querySelector("#txtNombreAlumno").value,
        direccion = document.querySelector("#txtDireccionAlumno").value,
        telefono = document.querySelector("#txtTelefonoAlumno").value;

        var keyCodigo = "codigo"+Codigo;
        var keyNombre = "nombre"+Codigo;
        var keyDireccion = "direccion"+Codigo;
        var keyTelefono = "telefono"+Codigo;

        if( 'localStorage' in window ){
            window.localStorage.setItem(keyCodigo,Codigo);
            window.localStorage.setItem(keyNombre,nombre);
            window.localStorage.setItem(keyDireccion,direccion);
            window.localStorage.setItem(keyTelefono,telefono);
        } else{
            alert("El Almacenamiento en local no soporta, actualizate!");
        }
    });
    document.querySelector("#btnRecuperarAlumnos").addEventListener("click",(e)=>{
        if('localStorage' in window){
            let Codigo = document.querySelector("#txtCodigoAlumno").value;
            if(Codigo != ""){
            document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("codigo"+Codigo);
            document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("nombre"+Codigo);
            document.querySelector("#txtDireccionAlumno").value = window.localStorage.getItem("direccion"+Codigo);
            document.querySelector("#txtTelefonoAlumno").value = window.localStorage.getItem("telefono"+Codigo);
            } else{
                alert("PARA RECUPERAR LOS DATOS AGREGUE EL CODIGO");
            }
        }else{
            alert("El Almacenamiento en local no soporta, actualizate!");
        }
    });
});