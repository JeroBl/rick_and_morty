
// const validation = (userData) => {
//     let errors = {};

//     if(!/^[\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
//         errors.username = "El email es inválido";
//     }
//     if(!userData.username){
//         errors.username = "Este campo no puede estar vacío";
//     }
//     if(userData.username.length > 35){
//         errors.username = "El email no puede superar los 35 caracteres";
//     }
//     if(!userData.password.match(/\d/)){
//         errors.password = "La contraseña debe contener al menos un número";
//     }
//     if(userData.password.length < 6  || userData.password.length < 10){
//         errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
//     }
//     return errors;
// }

// export default validation;

const validation = (userData, errors, setErrors) => {
  // username
  if (!userData.username)
    setErrors({ ...errors, username: "Por favor completa este campo" });
  else if (userData.username.length > 35)
    setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
  else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "Email inválido" });
  } else {
    setErrors({ ...errors, username: "" });
  }

  // password
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "Longitud de password inválida" });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe contener al menos un número" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default validation;