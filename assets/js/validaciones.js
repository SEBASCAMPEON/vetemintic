//Archivo js
//REQUERIMIENTO 3
/*
El formulario cuenta con un <input> cuyo id es
“contrasena_usuario”. Debe implementar una función de
JS validar_contrasena que recibe un parámetro tipo string,
la función realiza las siguientes validaciones para el string:
• Debe tener 6 o más caracteres.
• Solo puede contener caracteres alfanuméricos. Es
decir, letras de la A a la Z y los números del 0 al 9.
• Debe contener por lo menos una letra minúscula,
una letra mayúscula y un número.
En caso de cumplir las condiciones retorna verdadero,
de lo contrario retorna falso.*/

function validar_contrasena(string) {

    //console.log(string);
    //validar numero de caracteres
    let numcaracteres = string.length;
    //console.log(numcaracteres);



    //Variables
    let números = "0123456789";
    let letrasmayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let letrasminus = "abcdefghijklmnñopqrstuvwxyz";
    let alfanumeric = números + letrasmayus + letrasminus;
    //booleanos
    let isAlfanumeric;
    let isNumhere;
    let isMayusHere;
    let isMinusHere;

    //validar si hay números y letras
    for (var i = 0; i < string.length; i++) {
        if (alfanumeric.indexOf(string.charAt(i), 0) != -1) {
            isAlfanumeric = true;
        } else {
            isAlfanumeric = false;
            break;
        }
        //console.log(i);
        //console.log("Es alfanumerico: " + isAlfanumeric);
    }
    //console.log("Alfa num: " + isAlfanumeric);

    //Validar un número.
    for (var i = 0; i < string.length; i++) {
        if (números.indexOf(string.charAt(i), 0) != -1) {
            isNumhere = true;
            break;
        } else {
            isNumhere = false;
        }
        //console.log(i);
        //console.log("Tiene números: " + isNumhere);
    }
    //console.log("Tiene num: " + isNumhere);

    //Validar que Debe contener por lo menos una letra minúscula, una letra mayúscula y un número.

    for (var i = 0; i < string.length; i++) {
        if (letrasmayus.indexOf(string.charAt(i), 0) != -1) {
            isMayusHere = true;
            break;
        } else {
            isMayusHere = false;
        }
        //console.log(i);
        //console.log("Tiene mayusculas: " + isMayusHere);
    }
    //console.log("Hay Mayus: " + isMayusHere);

    //Validar que Debe contener por lo menos una letra minúscula, una letra mayúscula y un número.


    for (var i = 0; i < string.length; i++) {
        if (letrasminus.indexOf(string.charAt(i), 0) != -1) {
            isMinusHere = true;
            break;
        } else {
            isMinusHere = false;
        }
        //console.log(i);
        //console.log("Tiene minusculas: " + isMinusHere);
    }
    //console.log("Hay minus: " + isMinusHere);


    //Condicionales
    /*Aqui retornamos el false o true que pide el ejercicio*/
    if (numcaracteres >= 6) {
        if (isAlfanumeric == true && isNumhere == true && isMayusHere == true && isMinusHere == true) {
            console.log("Estado interno: " + true);
            //alert("Excelente");
            return true;
        } else {
            console.log("Estado interno: " + false);
            //alert("Error");

            return false;
        }
    } else {
        console.log("Estado interno: " + false);
        //alert("Error");

        return false;
    }

}
//Función para probar
//validar_contrasena("Sebas1234");




//Descomentar esto ultimo al subirlo
//module.exports.validar_contrasena = validar_contrasena;