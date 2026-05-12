

let contactos = [ {
    nombre: "pedro martinez",
    telefono: "809-399-6574",
    email: "pmartinez@gmail.com"
}, {
    nombre: "Juan soto",
    telefono: "765-980-3243",
    email: "juanmvpsoto@gmail.com"
}, {
    nombre: "anthonio spallath",
    telefono: "984-735-0909",
    email: "anthoniokillpleope@gmail.com"
} ];


contactos.push({
    nombre : prompt("Ingresa el nombre"),
    telefono : prompt("Ingresa el telefono"),
    email : prompt("Ingrese el email")
});

let ultimo = contactos.length  - 1;

console.log (`${contactos[0].nombre} // ${contactos[0].telefono} // ${contactos[0].email}`);

console.log (`${contactos[ultimo].nombre} // ${contactos[ultimo].telefono} // ${contactos[ultimo].email}`);

