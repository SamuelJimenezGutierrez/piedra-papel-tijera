//FUNCIONES//
function númeroAleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function elección(númeroElegido)
{
    let resultado = ""

    if(númeroElegido == 1)
    {
    resultado = "piedra."
    }

    else if(númeroElegido == 2)
    {
    resultado = "papel."
    }

    else if(númeroElegido == 3)
    {
    resultado = "tijera."
    }
    
    else
    {
    resultado = "una opción incorrecta. Por favor selecciona un número del 1 al 3."
    }

    return resultado
}

function mensajeDeElección(función, valor1, valor2)
{
    alert("Tu elegiste " + función(valor1))
    alert("El PC eligió " + función(valor2))
}

function combate(valor1, valor2)
{
    if (valor1 == valor2)
    {
        alert("EMPATE")
    }

    else if (valor1 == 1 && valor2 == 3)
    {
        alert("GANASTE")
        triunfos = triunfos + 1
    }

    else if (valor1 == 2 && valor2 == 1)
    {
        alert("GANASTE")
        triunfos = triunfos + 1
    }

    else if (valor1 == 3 && valor2 == 2)
    {
        alert("GANASTE")
        triunfos = triunfos + 1
    }

    else
    {
        alert("PERDISTE")
        derrotas = derrotas + 1
    }
}

//DECLARACIÓN DE VARIABLES//
let elecciónJugador = 0
let elecciónPC = 0
let triunfos = 0
let derrotas = 0

while(triunfos < 3 && derrotas < 3)
{
    elecciónJugador = prompt("Escribe 1 para elegir piedra, 2 para elegir papel o 3 para elegir tijera.")
    elecciónPC = númeroAleatorio(1,3)
    mensajeDeElección(elección, elecciónJugador, elecciónPC)
    combate(elecciónJugador, elecciónPC)
}

alert("Número de veces que ganaste: " + triunfos + ". Número de veces que perdiste: " + derrotas + ".")

if (triunfos > derrotas)
{
    alert("HAS GANADO ESTA COMPETENCIA")
}

else
{
    alert("EL PC GANÓ ESTA COMPETENCIA")
}
