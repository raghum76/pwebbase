document.getElementById("btnSave").addEventListener("click",()=>{
    let nombre=document.getElementById("txtNombre").value;
    let edad=document.getElementById("txtEdad").value;
    let correo=document.getElementById("txtCorreo").value;
    let alguien=new Persona(nombre,edad,correo);
    localStorage.setItem("miBDp",JSON.stringify(alguien));
    console.log("guardado " + alguien );
})
