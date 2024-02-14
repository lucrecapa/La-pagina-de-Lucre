
/*
    tenemos 3 tipos de datos que son:
    string, es para texto. Se escrbie entre comillas asi: "GHOLA GENTE"
    int. es para numeros enteros. asi: 44
    float. es nume4ro con coma. la coma es la yanki, con un punto. asi: 36.7

    Objetos viene despues.

    tipo de dato, nombre variable = valor

    let es variable
    const es constante
*/
function elLucre () {
    let edad = prompt ("Coloque su edad ")
    let nombre = prompt ("Coloque su nombre")
    alert ("Hola! " + nombre + " Tu edad es " + edad) 
}
//elLucre ()

function pedirEdad () {
    let edad = Number (prompt ("Ingrese su edad")) 
    if (edad < 18) {
        alert ("No podés entrar 🤣 sory")
        pedirEdad ()
    } else {
        alert ("Bien ahí capo, bienvenide")
    }
}
pedirEdad ()


console.log("¿Tenés más de 18 años?")