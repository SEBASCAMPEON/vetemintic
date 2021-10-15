//#SPRINT 5
//Función agregar registros
//Esto ya está en registro solo debe agregarse en este punto por requerimiento del sprint
let registros = [];

function agregarRegistro() {
    var nameguard = (document.getElementById('nombre_usuario')).value;
    var anoguard = (document.getElementById('anoNacimiento_usuario')).value;
    var passwguard = (document.getElementById('contrasena_usuario')).value;

    let nuevoRegistro = {
        usuario: nameguard,
        anoNacimiento: anoguard,
        contrasena: passwguard
    }
    registros.push(nuevoRegistro);
    console.log(registros);
    //alert("agregado");
    //EncontrarUsuarioPorEdad(registros);
}



//login y recpactha

function iniciar_sesion(usuario, contrasena, rcaptcha) {

    let usr;
    let pss;
    let captcha = validar_captcha(rcaptcha);

    for (var i = 0; i < registros.length; i++) {
        usr = registros[i].usuario;
        //console.log(usuario);
        //console.log(usr);
        pss = registros[i].contrasena;
        //console.log(contrasena);
        //console.log(pss);

        if (usr == usuario) {
            if (pss == contrasena) {
                if (captcha == true) {
                    return true;
                    break;
                } else {
                    return false;
                }

            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function validar_captcha(rcaptcha) {
    let valorcapactha = Math.pow(2, 4);
    let usercaptacha = parseInt(rcaptcha);
    //console.log(valorcapactha);
    if (usercaptacha === valorcapactha) {
        //alert("Sesión iniciada");
        //console.log("Sesión iniciada");

        return true;
    } else {
        //alert("Inicio de sesión fallido");
        //console.log("Inicio de sesión fallido");
        return false;
    }
}
//iniciar_sesion("Sebastian", 1234567, 4);
//iniciar_sesion("Sebastian", 123456789, 4);
//iniciar_sesion("Sebastian", 123456789, 16);

//validar_captcha(16);
//Fin sprint 5

module.exports.registros = registros;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.validar_captcha = validar_captcha;
module.exports.agregarRegistro = agregarRegistro;
