const validarCorreo=(correo)=>{
      return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo.trim( ));

}

const validarpassword=(password)=>{
 return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/.test(password.trim());

}
const validarnombres=()=>{
  return 

}