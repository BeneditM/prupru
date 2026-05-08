

let contactos = [ {
    nombre: "Maxwell wright",
    telefono: "809-399-6574",
    email: "maxwr@gmail.com"
}, {
    nombre: "Juan Suero",
    telefono: "765-980-3243",
    email: "juans@gmail.com"
}, {
    nombre: "maria smith",
    telefono: "984-735-0909",
    email: "maria_smith@gmail.com"
} ];
    contactos.push ( {
        nombre: "masiel hernandez",
        telefono: "645-023-6549",
        email: "masielh@gmail.com"

    } );

    let ultimo = contactos.length -1;
    
    console.log (`${contactos[0].nombre} / ${contactos[0].telefono} / ${contactos[0].email}`);

    console.log (`${contactos[ultimo].nombre} / ${contactos[ultimo].telefono} / ${contactos[ultimo].email}`);