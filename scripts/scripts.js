let bienvenido = alert("Bienvenidos a Simplo Cocina! A continuación te vamos a ayudar a armar tu pedido a través de algunas preguntas")
let menu = parseInt(prompt("Que deseas comer hoy (ingresa solamente el número de la opción escogida): \n 1)Pizzas \n 2)Empanadas"))
let IVA = 1.21

while ((menu != 1 && menu != 2)) {
    alert("Producto inexistente, por favor escoja una opción válida")
    menu = parseInt(prompt("Que deseas comer hoy?(Ingresa solamente el número de la opción): \n 1)Pizzas \n 2)Empanadas"))
    }

orden ()

function orden () {
    switch (menu) {
        case 1: 
            let saborPizza = parseInt(prompt("Perfecto, elegiste pizza, ahora decinos de que sabor vas a quererla (Ingresa solamente el número de la opción)\n 1) Napolitana \n 2) Muzzarella \n 3) Fugazzetta \n 4) Calabresa \n 5) Rúcula y crudo"))
                if (saborPizza === 1) {
                    alert ("Una de las delicias de la casa, con tomates de la huerta, excelente queso y una salsita de ajo tremenda. Tu precio total a pagar es "+ 1400 * IVA)
                }
                else if (saborPizza === 2) {
                    alert ("La clásica, pero con un excelente queso muzzarella, y un chorrito de aceite de oliva sobre, con poquito de albahaca. El total a pagar es"+ 1100 * IVA)
                }
                else if (saborPizza === 3) {
                    alert ("Riquisima, muy buena elección. Tu precio por pagar es de" + 1250 * IVA)
                }
                else if (saborPizza === 4) {
                    alert ("Una de nuestras favoritas, con la mejor calabresa. Tu precio total a pagar es de " + 1600 * IVA)
                }
                else if (saborPizza === 5) {
                    alert ("Una locura. Excelente jamón serrano, con rúcula de nuestra huerta, lluvia de queso parmesano y aceitunas negras, con un chorrito de aceite de oliva. El total a pagar es de " + 2100 * IVA)
                } 
                break
        case 2: 
            let saborEmpanadas = parseInt(prompt("Perfecto, elegiste empanadas, ahora decinos de que sabores vas a querer (Ingresa solamente el número de la opción elegida) \n 1) Carne suave \n 2) Jamón y queso \n 3) Verdura"))
                if (saborEmpanadas === 1) {
                    alert ("Elegiste nuestra especialidad, con los condimentos justos, además de aceitunas. Ahora decinos cuantas te preparamos")
                }
                else if (saborEmpanadas === 2) {
                    alert ("Son una delicia, sabes por qué? Porque están hechas con el mejor jamón y queso muzzarella de primera. Ahora decinos cuantas vas a querer")
                }
                else if (saborEmpanadas === 3) {
                    alert  ("Nuestra opción para los vegetarianos. Cuantas vas a querer?")
                }
            let precio = 250
            let docena = 2400
            let cantidad  = parseInt(prompt("Cuantas empanadas vas a necesitar que te preparemos? Ingresa solamente el número de empanadas deseadas. Recorda que llevando por docena tenes precio promocional, sino el valor de cada una es de 250"))
                if (cantidad === 12) {
                    alert ("Excelente, vas a aprovechar nuestra promo. Tu total a pagar es de" +docena)
                } 
                else if (cantidad != 12) {
                    alert ("Tu total a pagar es de " +precio * cantidad)
                }
    }
}

let envio = 300
let pedido = parseInt(prompt("Ahora nos falta saber si vas a necesitar que te lo enviemos o si lo pasas a retirar. Recorda solamente ingresar el número de la opción deseada. \n 1) Envio \n 2) Retiro"))

function delivery () {
        switch (pedido) {
            case 1:
                let direccion = parseInt(prompt("Estas son las localidades a las que podemos enviarte el pedido. Decinos de que localidad sos \n 1) Ezeiza \n 2) Canning \n 3) Jaguel \n 4) Monte Grande"))
                if (direccion === 1 || direccion === 2) {
                    alert ("Perfecto, el total a abonar por el envio es de" +envio / 2)
                }
                else if (direccion === 3 || direccion === 4) {
                    alert ("Vamos a tardar un poquito más, pero quedate tranquilo que te lo llevamos. El total a abonar por el envio es de " + envio)
                }
                else if (direccion != 1 || direccion !=2 || direccion != 3 || direccion != 4) {
                    alert ("Lo sentimos, no llegamos a esa localidad. Te invitamos a que pases a retirar tu pedido por Fournier 834, Ezeiza")
                }
            break
            case 2: 
                alert("Excelente. Tu pedido estará listo en 45 minutos. Recorda que estamos en Fournier 834, Ezeiza")
        }
}

delivery ()