"use strict";

// let contactos = [
// {
//     nombre: "Pedro Martinez",
//     telefono: "809-399-6574",
//     email: "pmartinez@gmail.com"
// },
// {
//     nombre: "Juan Soto",
//     telefono: "765-980-3243",
//     email: "juanmvpsoto@gmail.com"
// },
// {
//     nombre: "Anthonio Spallath",
//     telefono: "984-735-0909",
//     email: "anthoniokillpleope@gmail.com"
// }
// ]; 

// let accion;

// while (accion !== "salir") {

//     accion = prompt(
//         "¿Qué deseas hacer?\n\n" +
//         "primero - Mostrar primer contacto\n" +
//         "ultimo - Mostrar último contacto\n" +
//         "todos - Mostrar todos los contactos\n" +
//         "nuevo - Añadir nuevo contacto\n" +
//         "salir - Finalizar programa"
//     );

//     if (accion === "primero") {

//         console.log(
//             `${contactos[0].nombre} // ${contactos[0].telefono} // ${contactos[0].email}`
//         );

//     } else if (accion === "ultimo") {

//         let ultimo = contactos.length - 1;

//         console.log(
//             `${contactos[ultimo].nombre} // ${contactos[ultimo].telefono} // ${contactos[ultimo].email}`
//         );

//     } else if (accion === "todos") {

//         for (let i = 0; i < contactos.length; i++) {

//             console.log(
//                 `${contactos[i].nombre} // ${contactos[i].telefono} // ${contactos[i].email}`
//             );

//         }

//     } else if (accion === "nuevo") {

//         let nombre = prompt("Ingresa el nombre:");
//         let telefono = prompt("Ingresa el teléfono:");
//         let email = prompt("Ingresa el email:");

//         contactos.push({
//             nombre: nombre,
//             telefono: telefono,
//             email: email
//         });

//         console.log("Nuevo contacto agregado correctamente.");

//     } else if (accion === "salir") {

//         console.log("Programa finalizado.");

//     } else {

//         console.log("Opción no válida.");

//     }
// } 

// let numero = Number (prompt("Ingrese un numero : "));
//     if (numero < 10){
//             alert(`numero ${numero}, es menor que 10`);
//             console.log(`numero ${numero} : es menor que 10`);
//     }
// else if (numero < 20){
//     alert(`numero ${numero}, es menor que 20`);
//     console.log(`numero ${numero} : es menor que 20`);
// }
// else if (numero < 30){
//     alert(`numero ${numero}, es menor que 30`);
//     console.log(`numero ${numero} : es menor que 30`);
// }
// else if (numero < 40){
//     alert(`numero ${numero}, es menor que 40`);
//     console.log(`numero ${numero} : es menor que 40`);
// }
// else if (numero < 50){
//     alert(`numero ${numero}, es menor que 50`);
//     console.log(`numero ${numero} : es menor que 50`);
// }
// else if (numero < 60){
//     alert(`numero ${numero}, es menor que 60`);
//     console.log(`numero ${numero} : es menor que 60`);
// }
// else if (numero < 70){
//     alert(`numero ${numero}, es menor que 70`);
//     console.log(`numero ${numero} : es menor que 70`);
// }
// else if (numero < 80){
//     alert(`numero ${numero}, es menor que 80`);
//     console.log(`numero ${numero} : es menor que 80`);
// }
// else if (numero < 90){
//     alert(`numero ${numero}, es menor que 90`);
//     console.log(`numero ${numero} : es menor que 90`);
// }
// else if (numero < 100){
//     alert(`numero ${numero}, es menor que 100`);
//     console.log(`numero ${numero} : es menor que 100`);
// }
// else if (numero == 100){
//     alert(`numero ${numero}, es menor que 100`);
//     console.log(`numero ${numero} : es menor que 100`);
// }
// else {alert(`el numero ${numero}, es mayor que 100`);
// console.log(`el numero ${numero} es mayor que 100`); }

// let contactos = [
//     {
//         nombre : "Pedro Martinez",
//         telefono : "809-334-5545",
//         email : "pmartinez@gmail.com"
//     },
//     {
//         nombre : "Antonio Fall",
//         telefono : "809-565-4356",
//         email : "antfall@gmail.com"
//     },
//     {
//         nombre : "maria tijuana",
//         telefono : "834-543-7877",
//         email : "tijuanamari@gmail.com"
//     }
// ];

// contactos.push({
//     nombre : prompt("Ingrese el nombre : "),
//     telefono : prompt("Ingrese el telefono : "),
//     email : prompt("Ingrese el email : ")
// });

// let ultimo = contactos.length - 1;
// console.log(`${contactos[0].nombre} // ${contactos[0].telefono} // ${contactos[0].email}`);

// console.log(`${contactos[ultimo].nombre} // ${contactos[ultimo].telefono} // ${contactos[ultimo].email}`);

let salida = prompt(`Elige la salida : a, b, c `);
let ganar = false;

switch (salida) {
    case "a" : alert(`Salida ${salida} : Vacia (Perdiste)`);
    break ;

    case "b" : alert(`salida ${salida} : primer lugar`); ganar = true;
    break ;
    case "c" : alert(`Salida ${salida} : Vacia (Perdiste Pendejo)`);
    break ;

    default : alert(`Salida ${salida} : Esta area dejo de Existir` );
}

if (ganar) {
    alert(`el ganador es la salida : ${salida}`);
    console.log (`el ganador es la salida : ${salida}`)
} ;