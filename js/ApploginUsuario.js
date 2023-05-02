
var sesion=localStorage.getItem("nombre");
const checarSesion=()=>{
if(sesion!=null){
   window.location.href="index.html";
}
 
}

const registrarusuario= async()=>{
   var correo=document.querySelector("#correo").value;
   var password=document.querySelector("#password").value;
   var nombres=document.querySelector("#nombres").value;

   if(correo.trim()===''||
   password.trim()==='' ||
   nombres.trim()==='' 
   ){
   Swal.fireSwal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'FALTA LLENAR CAMPOS',
      footer: 'CRUD TORNEOS'
    })
    return;
   }
   if(!validarCorreo(correo)){
      Swal.fireSwal.fire({
         icon: 'error',
         title: 'ERROR',
         text: 'INTRODUCE UN CORREO',
         footer: 'CRUD TORNEOS'
      })
      return;
      
   }
   if(!validarpassword(password)){
      Swal.fireSwal.fire({
         icon: 'error',
         title: 'ERROR',
         text: 'INTRODUCE UN CORREO',
         footer: 'CRUD TORNEOS'
      })
      return;
      
   }
   if(!validarnombres(nombres)){
      Swal.fireSwal.fire({
         icon: 'error',
         title: 'ERROR',
         text: 'INTRODUCE UN CORREO',
         footer: 'CRUD TORNEOS'
      })
      return;
      
   }
   
   //INSERTAR A LA BASE DE DATOS
   const datos=new FormData();
   datos.append("correo",correo);
   datos.append("password",password); 
   datos.append("nombres",nombres);

   var respuesta=await fetch("PHP/Usuario/registrarUsuario.php",{
      method:'POST',
      body:datos
   });
   Swal.fireSwal.fire({
      icon: 'Sucess',
      title: 'EXITO',
      text: 'RESPUESTA',
      footer: 'CRUD TORNEOS'
   });
   var resultado=await respuesta.json();
   if(resultado.sucess==true){
      Swal.fireSwal.fire({
         icon: 'sucess',
         title: 'EXITO!',
         text: resultado.mensaje,
         footer: 'CRUD TORNEOS'
      })
      document.querySelector("#formregistrar").reset()
      setTimeout(()=>{
         window.location.href="index.html"
      },2000);
   }else{
      Swal.fireSwal.fire({
         icon: 'sucess',
         title: 'EXITO!',
         text: resultado.mensaje,
         footer: 'CRUD TORNEOS'
      })

   }
}
const loginusuario= async()=>{
   var correo=document.querySelector("#correo").value;
   var password=document.querySelector("#password").value;
   var nombres=document.querySelector("#nombres").value;

   if(correo.trim()===''||
   password.trim()==='' ||
   nombres.trim()==='' 
   ){
   Swal.fireSwal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'FALTA LLENAR CAMPOS',
      footer: 'CRUD TORNEOS'
    })
    return;
   }
   if(!validarCorreo(correo)){
      Swal.fireSwal.fire({
         icon: 'error',
         title: 'ERROR',
         text: 'INTRODUCE UN CORREO',
         footer: 'CRUD TORNEOS'
      })
      return;
      
   }
   if(!validarpassword(password)){
      Swal.fireSwal.fire({
         icon: 'error',
         title: 'ERROR',
         text: 'INTRODUCE UN CORREO',
         footer: 'CRUD TORNEOS'
      })
      return;

      
                 }
                 const datos=new FormData();
   datos.append("correo",correo);
   datos.append("password",password); 

   var respuesta=await fetch("PHP/Usuario/loginUsuario.php",{
      method:'POST',
      body:datos
   });
   Swal.fireSwal.fire({
      icon: 'Sucess',
      title: 'EXITO',
      text: 'RESPUESTA',
      footer: 'CRUD TORNEOS'
   });
   var resultado=await respuesta.json();
   if(resultado.sucess==true){
      Swal.fireSwal.fire({
         icon: 'sucess',
         title: 'EXITO!',
         text: resultado.mensaje,
         footer: 'CRUD TORNEOS'
      })
      document.querySelector("#formIniciar").reset()
      localStorage.setItem("nombres", resultado.nombres);
      setTimeout(()=>{
         window.location.href="index.html"
      },2000);
   }else{
      Swal.fireSwal.fire({
         icon: 'sucess',
         title: 'EXITO!',
         text: resultado.mensaje,
         footer: 'CRUD TORNEOS'
      })}


       }